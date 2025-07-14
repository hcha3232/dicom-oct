import React, { useEffect, useRef, useState } from 'react';


import { init as coreInit, RenderingEngine, Enums, EVENTS } from '@cornerstonejs/core';
import { init as dicomImageLoaderInit } from '@cornerstonejs/dicom-image-loader';
import { init as csToolsInit, addTool, StackScrollTool, ToolGroupManager, Enums as toolsEnums} from '@cornerstonejs/tools'


export const useCornerstoneStack = (dcmFileName, totalFrames) => {
    const divRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(1);

    useEffect(() => {
        const renderingEngineId = `RE_${dcmFileName}`;
        const viewportId = `VP_${dcmFileName}`;
        const toolGroupId = `TG_${dcmFileName}`;
        const element = divRef.current;

        let renderingEngine;
        let viewport;
        let scrollHandler;
        let toolGroup;

        (async () => {
            try {
                // initialise core, image loader, tools
                await coreInit();
                await dicomImageLoaderInit();
                await csToolsInit();

                // register scroll tool
                addTool(StackScrollTool);

                renderingEngine = new RenderingEngine(renderingEngineId);
                renderingEngine.enableElement({
                    viewportId,
                    element,
                    type: Enums.ViewportType.STACK,
                });

                // 3. imageIds for multi-frame DICOM
                const baseUrl = import.meta.env.BASE_URL;      
                const imageIds = Array.from({ length: totalFrames }, (_, i) =>
                    `wadouri:${baseUrl}/${dcmFileName}?frame=${i+1}`
                );

                // load stack into viewport
                viewport = renderingEngine.getViewport(viewportId);
                await viewport.setStack(imageIds, 0); 
                viewport.resetCamera();
                viewport.render();

                toolGroup = ToolGroupManager.getToolGroup(toolGroupId) || ToolGroupManager.createToolGroup(toolGroupId);
                
                // Add the tool by its name
                toolGroup.addTool(StackScrollTool.toolName);
                toolGroup.setToolActive(StackScrollTool.toolName, {
                    bindings: [
                        { mouseButton: toolsEnums.MouseBindings.Wheel},
                        { mouseButton: toolsEnums.MouseBindings.Primary}
                    ]
                })
                toolGroup.addViewport(viewportId, renderingEngineId);

                scrollHandler = (evt) => {
                    setCurrentFrame(evt.detail.newImageIdIndex + 1);
                }
                viewport.element.addEventListener(
                    EVENTS.STACK_VIEWPORT_SCROLL, 
                    scrollHandler
                );

            } catch (error) {
                console.error('Cornerstone init error', error)
            }
        })();

        // Cleanup on unmount or dcmFileName Change
        return () => {
            if (viewport && scrollHandler) {
                viewport.element.removeEventListener(
                    EVENTS.STACK_VIEWPORT_SCROLL,
                    scrollHandler
                );
            }
            if (toolGroup) {
                ToolGroupManager.destroyToolGroup(toolGroupId);
            }
            if (renderingEngine) {
                renderingEngine.disableElement({ viewportId, element});
                renderingEngine.destroy();
            }
        }
    }, [dcmFileName, totalFrames]);

    return { divRef, currentFrame, totalFrames};
}

export default useCornerstoneStack;
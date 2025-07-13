import React, { useEffect, useRef, useState } from 'react';


import { init as coreInit, RenderingEngine, Enums, EVENTS } from '@cornerstonejs/core';
import { init as dicomImageLoaderInit } from '@cornerstonejs/dicom-image-loader';


export const useCornerstoneSlice = (dcmFileName) => {
    const divRef = useRef(null);

    useEffect(() => {
        const renderingEngineId = `RE_${dcmFileName}`;
        const viewportId = `VP_${dcmFileName}`;
        const element = divRef.current;

        let renderingEngine;
        let viewport;

        (async () => {
            try {
                // initialise core, image loader, tools
                await coreInit();
                await dicomImageLoaderInit();

                renderingEngine = new RenderingEngine(renderingEngineId);
                renderingEngine.enableElement({
                    viewportId,
                    element,
                    type: Enums.ViewportType.STACK,
                });

                // 3. imageIds for multi-frame DICOM
                const baseUrl = window.location.origin;       
                const imageIds = [`wadouri:${baseUrl}/${dcmFileName}`];

                // load stack into viewport
                viewport = renderingEngine.getViewport(viewportId);
                await viewport.setStack(imageIds, 0); 
                viewport.resetCamera();
                viewport.render();


            } catch (error) {
                console.error('Cornerstone init error', error)
            }
        })();

        // Cleanup on unmount or dcmFileName Change
        return () => {
            if (renderingEngine) {
                renderingEngine.disableElement({ viewportId, element});
                renderingEngine.destroy();
            }
        }
    }, [dcmFileName]);

    return { divRef };
}

export default useCornerstoneSlice;
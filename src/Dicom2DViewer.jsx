// DicomStackViewer.jsx
import React, { useEffect, useRef, useState } from 'react';

import useCornerstoneSlice from './useCornerStoneSlice';


export const Dicom2DViewer = ({dcmFileName}) => {
    const { divRef } = useCornerstoneSlice( dcmFileName, );

    return(
    <div className = 'flex flex-col flex-1 rounded p-2 bg-[#EAE6DF]'>
      <div
        ref={divRef}
        className='w-full h-[500px]'
      />
      <div className='mt-2 px-2 py-1 text-sm text-white bg-gray-800 rounded w-fit'>
        Frame: 1 / 1
      </div>
    </div>
   )
  }

  export default Dicom2DViewer;



/*const DicomViewer = (props) => {
    const divRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const totalFrames = 25;  

    const renderingEngineId = `RE_${props.dcmFileName}`;
    const viewportId = `VP_${props.dcmFileName}`;
    const toolGroupId = `TG_${props.dcmFileName}`;

    useEffect (() => {
        (async () => {
            // 1. Initiate
            await coreInit();
            await dicomImageLoaderInit();
            await csToolsInit();
            addTool(StackScrollTool);


            // 2. Create engine and stack viewport 
            const element = divRef.current;
            const renderingEngine = new RenderingEngine(renderingEngineId);

            renderingEngine.enableElement({
                viewportId,
                element,
                type: Enums.ViewportType.STACK,
            });


            // 3. imageIds for multi-frame DICOM
            const baseUrl = window.location.origin;           // http://localhost:3000
            const fileName = `${props.dcmFileName}`;                       // no “.dcm” needed
            const imageIds = Array.from({ length: totalFrames }, (_, i) =>
                `wadouri:${baseUrl}/${fileName}?frame=${i+1}`
            );

            // 4. load stack
            const viewport = renderingEngine.getViewport(viewportId);
            await viewport.setStack(imageIds, 0); 
            
            

            //viewport.resetCamera(); // Auto fit to viewport
            viewport.resetCamera();
            viewport.render();
            ////////////////////////////////////////////////////////////////////

            // 6. Create and configure the ToolGroup for scrolling
            let toolGroup = ToolGroupManager.getToolGroup(toolGroupId);
            if (!toolGroup) {
                toolGroup = ToolGroupManager.createToolGroup(toolGroupId);
            }


            // Add the tool by its name
            toolGroup.addTool(StackScrollTool.toolName);
            toolGroup.setToolActive(StackScrollTool.toolName, {
                bindings: [
                    { mouseButton: toolsEnums.MouseBindings.Wheel},
                    { mouseButton: toolsEnums.MouseBindings.Primary}
                ]
            })
            toolGroup.addViewport(viewportId, renderingEngineId);

            viewport.element.addEventListener(EVENTS.STACK_VIEWPORT_SCROLL, (evt) =>{
                const { newImageIdIndex } = evt.detail;
                setCurrentFrame(newImageIdIndex + 1);
            })
        })();
    },[props.dcmFileName]);

    return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 10px' }}>
      <div
        ref={divRef}
        style={{
           height: '200px',
           width: '600px',
          border: '1px solid black',
        }}
      />

      <div
        style={{
          width: '100px',
          height: '20px',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '4px 8px',
          marginTop: '8px',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      >
        Frame: {currentFrame} / {totalFrames}
      </div>
    </div>

    )   
};

export default DicomViewer;*/
import React from 'react'
import DicomStacksViewer from './DicomStacksViewer';
import Dicom2DViewer from './Dicom2DViewer';


/**
* @author
* @function ViewerPanel
**/

export const ViewerPanel = ({viewerConfig = []}) => {
  return(
    <div className='flex flex-col gap-6 w-2/3 bg-[#F5F1EC] rounded shadow p-2 h-full overflow-y-auto'>
        {viewerConfig.map(({name, type}, i) => {
            switch (type) {
                case '2D' : return <Dicom2DViewer key={i} dcmFileName={name} />
                case '3D' : return <DicomStacksViewer key={i} dcmFileName={name} />
                default : return null;
            }
            
        })}
    </div>
   )
  }

  export default ViewerPanel;


  /*
<DicomStacksViewer dcmFileName="00000032" />
        <DicomStacksViewer dcmFileName="00000060" />
  */
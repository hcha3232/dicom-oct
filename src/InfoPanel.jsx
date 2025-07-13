import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom';

/**
* @author
* @function InfoPanel
**/

export const InfoPanel = ({ title, infoText, onPrev, onNext }) => {
  const navigate = useNavigate();

  return(
    <div className='w-1/3 bg-[#F5F1EC] rounded shadow p-4 h-full overflow-y-auto'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>

        <p className='text-sm text-gray-700 leading-relaxed'>{infoText}</p>

        <div className="mt-6 flex gap-4">
        {onPrev && (
          <button
            onClick={onPrev}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            ← Back
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next →
          </button>
        )}
      </div>

    </div>
   )
}

export default InfoPanel;
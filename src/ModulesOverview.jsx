import React from 'react'
import { Link } from 'react-router-dom';
import contentsConfig from './contentsConfig';

/**
* @author
* @function ModulesOverview
**/

export const ModulesOverview = () => {
  return(
    <div className="p-8">
      <h1 className="text-2xl mb-4">Educational Modules</h1>
    
      <ul className="space-y-2">
        {contentsConfig.map((m) => (
          <li key={m.id}>
            <Link to={`/modules/${m.id}/1`} className="px-4 py-2 bg-blue-500 text-white rounded">
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>

   )
  }

export default ModulesOverview;
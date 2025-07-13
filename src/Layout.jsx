import React from 'react'
import ViewerPanel from './ViewerPanel';
import InfoPanel from './InfoPanel';
import { useParams, useNavigate } from 'react-router-dom';
import contentsConfig from './contentsConfig';
/**
* @author
* @function Layout
**/

export const Layout = () => {
  const  {moduleId, pageId } = useParams();
  const navigate = useNavigate(); 
  const content = contentsConfig.find(c => c.id === moduleId);
  if (!content) return <div> Module not found. </div>;

  const pageIndex = content.pages.findIndex(p => p.id === Number(pageId));
  if (pageIndex === -1) return <div> Page not found. </div>

  const page = content.pages[pageIndex];
  const hasPrev = pageIndex > 0;
  const hasNext = pageIndex < content.pages.length - 1;

  return(
    <div className="max-w-[1200px] mx-auto h-screen flex gap-6 p-4 bg-[#DCD7CE] shadow">
        <ViewerPanel viewerConfig={page.viewers} />
        <InfoPanel
          title={`${content.title} - Page ${page.id}`}
          infoText={page.infoText}
          onPrev={hasPrev ? () => navigate(`/modules/${moduleId}/${content.pages[pageIndex-1].id}`) : null}
          onNext={hasNext ? () => navigate(`/modules/${moduleId}/${content.pages[pageIndex+1].id}`) : null}
        />
    </div>
   )
  }

  export default Layout;
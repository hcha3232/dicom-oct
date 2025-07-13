import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import { contentsConfig } from './contentsConfig'
import { Routes, Route } from 'react-router-dom';
import ModulesOverview from './ModulesOverview';

function App() {

  /*contentsConfig.forEach(({ path, viewerNames, infoText }) => {
    console.log(path, viewerNames, infoText);
  });*/

  return (
    <Routes>
      <Route path="/" element={<ModulesOverview />}/>
      {/* /modules/:moduleId/:pageId */}
      <Route path="modules/:moduleId/:pageId" element={<Layout />} />

      <Route path="*" element={<div>404: Page Not Found</div>} />

    </Routes>
  )
}

export default App

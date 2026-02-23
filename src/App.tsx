import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="app">
      <header className="header">
        <h1>ASP.NET Core Web API</h1>
        <p>Complete Implementation Documentation</p>
      </header>
      <div className="main-container">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <Content activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;

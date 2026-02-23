import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'overview', title: 'Project Overview', icon: '📋' },
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'response', title: 'API Response Model', icon: '📦' },
    { id: 'database', title: 'Database Configuration', icon: '🗄️' },
    { id: 'jwt', title: 'JWT Authentication', icon: '🔐' },
    { id: 'swagger', title: 'Swagger Configuration', icon: '📚' },
    { id: 'authorization', title: 'Role-Based Authorization', icon: '👥' },
    { id: 'crud', title: 'CRUD Operations', icon: '⚙️' },
    { id: 'endpoints', title: 'API Endpoints', icon: '🔗' },
    { id: 'error-handling', title: 'Error Handling', icon: '⚠️' },
    { id: 'summary', title: 'Architecture Summary', icon: '🏗️' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="icon">{section.icon}</span>
              <span className="title">{section.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

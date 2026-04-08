import React from 'react';
import { Link } from 'react-router-dom';  
import './Departments.css';

function Departments() {
  const departments = [
    { 
      title: 'MSC-CTPG(SoftwareSystems)', 
      description: 'The Department of Computer Science focuses on the latest technologies and innovations in real-world.',
      icon: 'fa-laptop-code',  
      link: '/msc-department',  
    },
    { 
      title: 'Mechanical Engineering', 
      description: 'The Department of Mechanical Engineering deals with the design and manufacturing of mechanical systems.',
      icon: 'fa-cogs',  
      link: '/mechanical-engineering', // Adding a default link for Mechanical Engineering
    },
    { 
      title: 'Civil Engineering', 
      description: 'The Department of Civil Engineering focuses on the construction and maintenance of infrastructure.',
      icon: 'fa-building',  
      link: '/civil-engineering', // Adding a default link for Civil Engineering
    },
    { 
      title: 'Electrical Engineering', 
      description: 'The Department of Electrical Engineering focuses on electrical systems and energy production.',
      icon: 'fa-bolt',  
      link: '/electrical-engineering', // Adding a default link for Electrical Engineering
    },
    { 
      title: 'Biotechnology', 
      description: 'The Department of Biotechnology specializes in the study and application of biological processes.',
      icon: 'fa-dna',  
      link: '/biotechnology', // Adding a default link for Biotechnology
    },
  ];

  return (
    <div className="departments-container">
      <h1 className="departments-heading">Departments in KEC</h1>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <div className="department-title">
              <i className={`fas ${dept.icon}`}></i> 
              <h3>{dept.title}</h3>
            </div>
            <p className="department-description">{dept.description}</p>
            <Link to={dept.link} className="department-link">
              Go to Department
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;

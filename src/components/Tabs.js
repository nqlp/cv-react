import React, { useState } from 'react';
import '../Tabs.css';
import Experience from './Experience';
import Formation from './Formation';
import PersonalProjects from './Personal-Projects';
import StudyProjects from './Study-Projects';
import AboutMe from './AboutMe';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Profil", content: <AboutMe /> },
        { title: "Expérience", content: <Experience /> },
        { title: "Formation", content: <Formation /> },
        { title: "Projets personnels", content: <PersonalProjects /> },
        { title: "Projet d'études", content: <StudyProjects /> },
    ];

    return (
        <div>
            <ul className="tab-list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tab-item ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;

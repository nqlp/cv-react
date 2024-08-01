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
        { title: "PROFIL", content: <AboutMe /> },
        { title: "EXPÉRIENCE", content: <Experience /> },
        { title: "FORMATION", content: <Formation /> },
        { title: "PROJETS PERSONNELS", content: <PersonalProjects /> },
        { title: "PROJETS D'ÉTUDES", content: <StudyProjects /> },
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

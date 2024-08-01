import React from "react";
import '../AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <h1>À PROPOS DE MOI</h1>
            <p> J'ai conçu et réalisé une grue avec commande manuelle, intégrant une communication sans fil pour le contrôle.
                J'ai utilisé SolidWorks, Altium et programmé l'automatisation en langage C.
                Cette expérience a renforcé mes compétences en communication et mon esprit d'équipe.
                Nous avons atteint les demi-finales d'une compétition.
                Je recherche maintenant de nouvelles opportunités pour apprendre de nouvelles technologies.
            </p>

            <section class="skills">
                <h1>CONNAISSANCES PARTICULIÈRES</h1>
                <hr />
                <h2>Langages de programmation :</h2>
                <ul>
                    <li>Java, Python (débutant), C (débutant), TypeScript / JavaScript.</li>
                </ul>
                <h2>Logiciels :</h2>
                <ul>
                    <li>Eclipse, Visual Studio, Visual Studio Code, DataGrip, IntelliJ IDEA, Oracle SQL
                        Developer,
                        Suite MS Office, Cisco Packet Tracer & Wireshark, HTML & CSS, Node.js.
                    </li>
                </ul>
                <h2>Environnements :</h2>
                <ul>
                    <li>Windows & macOS.</li>
                </ul>
                <h2>Cadriciel :</h2>
                <ul>
                    <li>Express.</li>
                </ul>
                <h2>SGBD :</h2>
                <ul>
                    <li>MongoDB, Oracle, MySQL.</li>
                </ul>
                <h2>Outils :</h2>
                <ul>
                    <li>GitHub.</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutMe;
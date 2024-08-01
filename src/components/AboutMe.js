import React from "react";

const AboutMe = () => {
    return (
        <div>
            <h2>À PROPOS DE MOI</h2>
            <p> J'ai conçu et réalisé une grue avec commande manuelle, intégrant une communication sans fil pour le contrôle.
                J'ai utilisé SolidWorks, Altium et programmé l'automatisation en langage C.
                Cette expérience a renforcé mes compétences en communication et mon esprit d'équipe.
                Nous avons atteint les demi-finales d'une compétition.
                Je recherche maintenant de nouvelles opportunités pour apprendre de nouvelles technologies.
            </p>

            <section class="skills">
                <h2>CONNAISSANCES PARTICULIÈRES</h2>
                <hr />
                <h3>Langages de programmation :</h3>
                <ul>
                    <li>Java, Python (débutant), C (débutant), TypeScript / JavaScript.</li>
                </ul>
                <h3>Logiciels :</h3>
                <ul>
                    <li>Eclipse, Visual Studio, Visual Studio Code, DataGrip, IntelliJ IDEA, Oracle SQL
                        Developer,
                        Suite MS Office, Cisco Packet Tracer & Wireshark, HTML & CSS, Node.js.</li>
                </ul>
                <h3>Environnements :</h3>
                <ul>
                    <li>Windows & macOS.</li>
                </ul>
                <h3>Cadriciel :</h3>
                <ul>
                    <li>Express.</li>
                </ul>
                <h3>SGBD :</h3>
                <ul>
                    <li>MongoDB, Oracle, MySQL.</li>
                </ul>
                <h3>Outils :</h3>
                <ul>
                    <li>GitHub.</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutMe;
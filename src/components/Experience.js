import React from "react";

const Experience = () => {
    return (
    <section>
        <h1>EXPÉRIENCE DE TRAVAIL</h1>
        <hr />
        <div>
            <h2> Hiver 2024 </h2>
            <div className="title"> ANALYSTE TI, Services partagés Canada (SPC) </div>
            <ul>
                <li>Traduire les documents de français à anglais et vice versa;</li>
                <li>Surveiller la boite de courriel de l'équipe;</li>
                <li>Effectuer la mise à jour des fichiers Excel;</li>
                <li>Procéder de l'assurance qualité des documents;</li>
                <li>Créer des gabarits pour des questionnaires;</li>
                <li>Produire des graphiques pour un tableau de bord avec Excel.</li>
            </ul>
        </div>

        {
            <div>
                <h2> Été 2019 </h2>
                <div className="title"> AIDE-MONITEUR, Loisirs St-Fabien </div>
                <ul>
                    <li> Assister le moniteur pour l'animation des ateliers; </li>
                    <li> Appliquer les règles de disciplines auprès des jeunes;</li>
                    <li> Surveiller les jeunes.</li>
                </ul>
            </div>
        }

        {
            <div>
                <h2> Été 2018 </h2>
                <div className="title"> COMMIS DE CRÈMERIE, SAPA </div>
                <ul>
                    <li> Servir les clients;</li>
                    <li> Préparer les commandes pour les clients;</li>
                    <li> Répondre aux questions des clients. </li>
                </ul>
            </div>
        }
    </section>
    )};

export default Experience;
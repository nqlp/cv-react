import React from "react";

const PersonalProjects = () => {
    return (
        <section>
            <h1>PROJETS PERSONNELS</h1>
            <hr />
            <div>
                <h2> Été 2023 </h2>
                <div className="title">MOVIES</div>
                <ul>
                    <li>Utiliser Node.js pour le côté serveur;</li>
                    <li>Programmer en TypeScript / JavaScript;</li>
                    <li>Gérer les versions avec GitHub;</li>
                    <li>Stocker les données dans MongoDB;</li>
                    <li>Styler avec CSS;</li>
                    <li>Développer avec Express en tant que cadre de Node.js;</li>
                    <li>Suivre l'architecture MVC;</li>
                    <li><a href="https://github.com/nqlp/movies">https://github.com/nqlp/movies</a></li>
                </ul>
                <h2>Été 2023 — TUTORIAL.BI — POWER BI</h2>
                <ul>
                    <li>Apprendre la base de Power BI;</li>
                    <li><a href="https://github.com/nqlp/Tutorial.BI">https://github.com/nqlp/Tutorial.BI</a>
                    </li>
                </ul>
                <h2>Été 2023 — TUTORIAL.PY — PYTHON</h2>
                <ul>
                    <li>Apprendre la base de Python;</li>
                    <li>Extraire et afficher les données d'un fichier Excel;</li>
                    <li>Utiliser pandas pour analyser les données;</li>
                    <li><a href="https://github.com/nqlp/Tutorial.py">https://github.com/nqlp/Tutorial.py</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default PersonalProjects;
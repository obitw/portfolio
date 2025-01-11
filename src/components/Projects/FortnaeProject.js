import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import fortunae from "../../Assets/Projects/fortunae/fortunae.png";
import fortunae2 from "../../Assets/Projects/fortunae/fortunae2.png";
import fortunae3 from "../../Assets/Projects/fortunae/fortunae3.png";

function FortunaeProject() {
    return (
        <Container fluid className="project-details-section">
            <Particle />
            <Container>
                <h1 className="project-title">Fortunae</h1>

                {/* Contexte du projet */}
                <Row className="project-content">
                    <Col md={6}>
                        <h2>Contexte du projet</h2>
                        <p>
                            Fortunae est une machine à sous en ligne que j'ai développée avec mon équipe dans le cadre de la SAE du semestre 3 de mon BUT Informatique.
                            Ce projet nous a offert l'opportunité d'explorer les concepts de développement web tout en expérimentant la gestion de projet en mode agile.
                            Sur une période de huit semaines, nous avons planifié et exécuté plusieurs sprints pour structurer efficacement le travail.
                            Une partie critique de ce projet consistait à mettre en œuvre des mécanismes de probabilité réalistes. L'objectif était de garantir que
                            l'expérience utilisateur soit à la fois engageante et équitable, tout en répondant aux attentes techniques.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={fortunae}
                            alt="Contexte du projet Fortunae"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Méthodes de travail */}
                <Row className="project-content">
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={fortunae2}
                            alt="Interface utilisateur de Fortunae"
                            className="project-image"
                            style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Méthodes de travail</h2>
                        <p>
                            Pour mener à bien Fortunae, nous avons adopté une méthodologie agile. Cette approche nous a permis de diviser le projet en phases claires grâce à une planification rigoureuse des sprints.
                            Chaque sprint était suivi de réunions quotidiennes où nous synchronisions nos efforts et résolvions les problèmes techniques rencontrés.
                            Nous avons utilisé des outils comme Trello pour gérer les tâches et GitLab pour le contrôle de version, assurant une collaboration efficace au sein de l'équipe.
                            Le développement technique s'est appuyé sur une architecture MVC (Modèle-Vue-Contrôleur), qui a garanti la modularité et la facilité d'évolution du projet.
                        </p>
                        <p>
                            L'un des aspects les plus innovants a été l'implémentation d'une génération congruentielle affine, une technique mathématique qui assure une génération aléatoire
                            équitable pour les tirages de la machine à sous. Cette méthode a été essentielle pour respecter les standards attendus dans ce type de jeu.
                        </p>
                    </Col>
                </Row>

                {/* Résultats obtenus */}
                <Row className="project-content">
                    <Col md={6}>
                        <h2>Résultats obtenus</h2>
                        <p>
                            Le résultat final est une machine à sous en ligne entièrement fonctionnelle et attrayante.
                            Nous avons conçu une interface graphique dynamique qui capte l'attention de l'utilisateur, accompagnée d'une ambiance sonore immersive pour enrichir l'expérience globale.
                            De plus, le système permet de collecter et d'afficher des statistiques utilisateur, offrant des données intéressantes sur les comportements des joueurs.
                            Le projet est également parfaitement compatible avec une large gamme de périphériques, permettant une accessibilité optimale sur ordinateurs, tablettes et smartphones.
                            Ces fonctionnalités ont fait de Fortunae un produit abouti, prêt à être utilisé dans un environnement réel.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={fortunae3}
                            alt="Résultats obtenus pour Fortunae"
                            className="project-image"
                            style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Compétences travaillées */}
                <Row className="project-details">
                    <Col md={12}>
                        <h2>Compétences travaillées</h2>
                        <p>
                            Ce projet m'a permis de renforcer plusieurs compétences essentielles.
                            Sur le plan technique, j'ai développé une expertise en backend avec PHP, notamment dans la gestion des probabilités et des algorithmes pour garantir des résultats justes.
                            En parallèle, j'ai perfectionné mes compétences front-end en JavaScript, en créant une interface utilisateur réactive et conviviale.
                            Le travail en équipe m'a également appris à communiquer efficacement et à gérer les tâches dans un cadre collaboratif.
                            Enfin, l'utilisation de l'architecture MVC m'a aidé à concevoir une base de code bien structurée, favorisant les ajouts et les modifications futures.
                        </p>
                    </Col>
                </Row>

                {/* Conclusion */}
                <Row className="project-conclusion">
                    <Col md={12}>
                        <h2>Conclusion</h2>
                        <p>
                            Fortunae représente un projet ambitieux qui a combiné innovation technique, gestion de projet agile et collaboration efficace.
                            Cette expérience m'a offert des opportunités inestimables pour appliquer mes connaissances et affiner mes compétences.
                            À l'avenir, le projet pourrait évoluer grâce à une analyse des retours utilisateurs, à un lancement officiel et à la mise en place
                            d'une stratégie de maintenance proactive pour garantir sa pérennité.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default FortunaeProject;

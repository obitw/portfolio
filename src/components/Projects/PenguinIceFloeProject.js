import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import penguin from "../../Assets/Projects/penguin/penguin.png";
import penguin2 from "../../Assets/Projects/penguin/penguin2.png";
import penguin3 from "../../Assets/Projects/penguin/penguin3.png";

function PenguinIceFloeProject() {
    return (
        <Container fluid className="project-details-section">
            <Particle />
            <Container>
                <h1 className="project-title">The Penguin Ice Floe</h1>

                {/* Contexte du projet */}
                <Row className="project-content">
                    <Col md={6}>
                        <h2>Contexte du projet</h2>
                        <p>
                            **The Penguin Ice Floe** a été développé dans le cadre de la Nuit de l'Informatique 2023, un hackathon intense organisé sur une nuit entière.
                            Le thème de l'édition 2023 portait sur la sensibilisation aux enjeux écologiques, ce qui nous a conduits à concevoir un site éducatif interactif.
                            Le projet visait à informer les utilisateurs sur des problématiques environnementales cruciales grâce à des pages de sensibilisation et des outils ludiques comme des quizz interactifs.
                            Travaillant avec une équipe de 7 personnes, j'ai contribué principalement à l'intégration et à la gestion d'une base de données MySQL, essentielle pour stocker et gérer les questions et réponses des quizz.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={penguin}
                            alt="Contexte du projet The Penguin Ice Floe"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Méthodes de travail */}
                <Row className="project-content">
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={penguin2}
                            alt="Interface utilisateur de The Penguin Ice Floe"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Méthodes de travail</h2>
                        <p>
                            Pour mener à bien ce projet, nous avons adopté une approche collaborative, en exploitant des outils comme GitLab pour le contrôle de version et Trello pour organiser les tâches.
                            La répartition des rôles a permis de couvrir les différents aspects du projet, tels que le développement front-end, l'intégration de contenus éducatifs, et la mise en place des fonctionnalités interactives.
                            Mon rôle principal était de concevoir et d'implémenter la base de données MySQL, en m'assurant que les questions et réponses du quizz étaient bien organisées et accessibles.
                            Un défi particulier résidait dans la création des pages de debunkage, où nous avons intégré des données et des exemples concrets pour contrer des idées reçues sur des thématiques environnementales.
                        </p>
                    </Col>
                </Row>

                {/* Résultats obtenus */}
                <Row className="project-content">
                    <Col md={6}>
                        <h2>Résultats obtenus</h2>
                        <p>
                            Le projet a abouti à un site web fonctionnel, combinant éducation et interactivité pour sensibiliser aux enjeux écologiques.
                            Les pages éducatives ont été bien reçues pour leur contenu clair et structuré, tandis que les quizz ont offert une expérience ludique pour approfondir les connaissances des utilisateurs.
                            Grâce à une base de données robuste, les quizz proposaient des questions variées et pertinentes, garantissant une expérience personnalisée et enrichissante.
                            Ce projet a démontré la puissance du travail d'équipe et l'impact d'un design bien pensé pour engager les utilisateurs sur des sujets complexes.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <a
                            href="https://www.linkedin.com/posts/ilias-ouchman-62a594264_survie-sur-glace-activity-7174135407691870208-Xqby?utm_source=share&utm_medium=member_desktop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={penguin3}
                                alt="Lien LinkedIn"
                                className="project-image"
                                style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px' }}
                            />
                        </a>
                    </Col>

                </Row>

                {/* Compétences travaillées */}
                <Row className="project-details">
                    <Col md={12}>
                        <h2>Compétences travaillées</h2>
                        <p>
                            Ce projet m'a permis de renforcer mes compétences techniques et collaboratives.
                            J'ai approfondi ma maîtrise des bases de données, en particulier MySQL, en intégrant et optimisant les fonctionnalités pour les quizz interactifs.
                            Sur le plan front-end, j'ai perfectionné l'utilisation de frameworks comme Bootstrap pour garantir une interface utilisateur réactive et attrayante.
                            En travaillant au sein d'une équipe diversifiée, j'ai également amélioré mes capacités de communication et de coordination, ce qui était crucial pour respecter les délais serrés de la Nuit de l'Informatique.
                        </p>
                    </Col>
                </Row>

                {/* Conclusion */}
                <Row className="project-conclusion">
                    <Col md={12}>
                        <h2>Conclusion</h2>
                        <p>
                            **The Penguin Ice Floe** a été une expérience enrichissante, combinant innovation technique, travail collaboratif et sensibilisation à une cause importante.
                            Ce projet m'a offert une opportunité unique de travailler sur un produit éducatif et interactif en un temps record.
                            Vous pouvez explorer le <a href="https://gitlabinfo.iutmontp.univ-montp2.fr/izoretr/penguins-ice-floe-ndi2023" target="_blank" rel="noopener noreferrer">code source du projet sur GitLab</a> pour en savoir plus.
                            Découvrez également mon <a href="https://www.linkedin.com/posts/ilias-ouchman-62a594264_survie-sur-glace-activity-7174135407691870208-Xqby?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">post LinkedIn</a> qui partage davantage sur cette expérience marquante.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default PenguinIceFloeProject;

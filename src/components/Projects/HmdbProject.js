import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import hmdb from "../../Assets/Projects/hmdb/hmdb.png";
import hmdb2 from "../../Assets/Projects/hmdb/hmdb2.png";
import hmdb3 from "../../Assets/Projects/hmdb/hmdb3.png";
import rapportPdf from "../../Assets/rapport.pdf"; // Lien vers le rapport

function HmdbProject() {
    return (
        <Container fluid className="project-details-section">
            <Particle />
            <Container>
                <h1 className="project-title">Human Myeloma DataBase (HMDB)</h1>

                {/* Contexte du stage */}
                <Row className="project-content align-items-center">
                    <Col md={6}>
                        <h2>Contexte du stage</h2>
                        <p>
                            La fin de la seconde année de BUT informatique s'est traduite par un stage en entreprise de 12 semaines.
                            J'ai réalisé ce stage au sein de l'<a href="https://igh.cnrs.fr/fr" target="_blank" rel="noopener noreferrer">Institut de Génétique Humaine (IGH)</a>.
                            Il s'agit d'une unité mixte de recherche <a href="https://www.cnrs.fr/fr" target="_blank" rel="noopener noreferrer">CNRS</a> /
                            <a href="https://www.umontpellier.fr/" target="_blank" rel="noopener noreferrer"> Université de Montpellier</a>, c'est-à-dire un laboratoire
                            de recherche du CNRS co-administré par plusieurs établissements, ici le CNRS et l'université de Montpellier.
                        </p>
                        <p>
                            Je vais vous proposer ici un résumé sommaire du travail que j'ai effectué au cours de ces semaines. Cependant, si vous souhaitez en apprendre
                            davantage, vous pouvez consulter le <a href={rapportPdf} target="_blank" rel="noopener noreferrer">rapport de stage</a> disponible ici.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img
                            src={hmdb}
                            alt="Interface principale de l'application HMDB"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Méthodes de travail */}
                <Row className="project-content align-items-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img
                            src={hmdb2}
                            alt="Interface utilisateur améliorée"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Méthodes de travail</h2>
                        <p>
                            J'ai suivi une méthodologie Agile adaptée à un développement individuel. Des réunions hebdomadaires
                            avec mon tuteur, Nicolas Robert, permettaient de valider les progrès et d'orienter le projet.
                            L'utilisation de Docker a facilité le développement en créant des environnements conteneurisés.
                            J'ai également mis en œuvre des pratiques de sécurité, notamment l'intégration de reCAPTCHA et la gestion
                            stricte des accès, pour protéger les données sensibles de l'application.
                        </p>
                    </Col>
                </Row>

                {/* Résultats obtenus */}
                <Row className="project-content align-items-center">
                    <Col md={6}>
                        <h2>Résultats obtenus</h2>
                        <p>
                            Le projet a abouti à une version stable et sécurisée de l'application HMDB, adaptée aux besoins
                            des équipes de recherche. Parmi les résultats obtenus figurent une gestion centralisée des données,
                            une amélioration de l'interface utilisateur, et des fonctionnalités avancées telles que le suivi des
                            patients multi-projets et la gestion des échantillons. Ces améliorations ont permis de rationaliser
                            les processus de recherche.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img
                            src={hmdb3}
                            alt="Nouvelle fonctionnalité intégrée"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Compétences travaillées */}
                <Row className="project-details">
                    <Col md={12}>
                        <h2>Compétences travaillées</h2>
                        <p>
                            Ce stage m'a permis de consolider mes compétences en développement FullStack, notamment en utilisant
                            PHP 8, Symfony, et MySQL. J'ai également acquis de l'expérience en conteneurisation avec Docker, en
                            sécurité des applications web, et en gestion de projets avec Git. En outre, cette expérience m'a
                            appris à collaborer avec une équipe pluridisciplinaire et à répondre aux besoins spécifiques des chercheurs.
                        </p>
                    </Col>
                </Row>

                {/* Conclusion */}
                <Row className="project-conclusion">
                    <Col md={12}>
                        <h2>Conclusion</h2>
                        <p>
                            Ce stage a été une expérience enrichissante, tant sur le plan technique que sur le plan humain.
                            J'ai pu contribuer de manière significative à un projet complexe tout en développant des compétences
                            transférables pour ma carrière future. Cette immersion dans le domaine de la recherche médicale
                            m'a également permis de mieux comprendre les enjeux des applications informatiques dans un contexte scientifique.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HmdbProject;

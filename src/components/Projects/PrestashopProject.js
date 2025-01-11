import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import prestashop from "../../Assets/Projects/prestashop/prestashop.png";
import prestashop2 from "../../Assets/Projects/prestashop/prestashop2.png";
import prestashop3 from "../../Assets/Projects/prestashop/prestashop3.png";

function PrestashopProject() {
    return (
        <Container fluid className="project-details-section">
            <Particle />
            <Container>
                <h1 className="project-title">Prestashop</h1>

                {/* Contexte du projet */}
                <Row className="project-content align-items-center">
                    <Col md={6}>
                        <h2>Contexte du projet</h2>
                        <p>
                            Ce projet a été réalisé dans le cadre de la SAE du semestre 5 de mon BUT Informatique.
                            Nous avons travaillé en équipe de 4 personnes pour répondre aux besoins réels d'un client.
                            La durée totale du projet était de 3 mois. Nous avons organisé des réunions hebdomadaires pour suivre les avancements et ajuster les fonctionnalités selon les retours du client.
                            Parmi les contraintes, il fallait respecter un budget restreint, garantir une navigation fluide pour les utilisateurs, et livrer le projet dans les délais impartis.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img
                            src={prestashop}
                            alt="Interface principale de Prestashop"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Méthodes de travail */}
                <Row className="project-content align-items-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img
                            src={prestashop2}
                            alt="Fonctionnalité de gestion des produits"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Méthodes de travail</h2>
                        <p>
                            Nous avons adopté la méthodologie Agile, avec des sprints de deux semaines et des rétrospectives pour évaluer les progrès.
                            Les réunions régulières avec le client ont permis de valider chaque étape du projet, notamment l'intégration des modes de paiement et la gestion des livraisons.
                            Nous avons utilisé Trello pour organiser les tâches et maintenir une communication fluide au sein de l'équipe.
                            De plus, des tests utilisateurs ont été menés pour identifier et résoudre les problèmes liés à l'interface utilisateur.
                        </p>
                    </Col>
                </Row>

                {/* Résultats obtenus */}
                <Row className="project-content align-items-center">
                    <Col md={6}>
                        <h2>Résultats obtenus</h2>
                        <p>
                            Le projet a abouti à une plateforme e-commerce fonctionnelle et adaptée aux besoins du client.
                            Parmi les fonctionnalités livrées, on trouve un système de gestion des produits, une interface intuitive pour les utilisateurs, et des modes de livraison personnalisés.
                            Le site est désormais déployé en production.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img
                            src={prestashop3}
                            alt="Plateforme déployée"
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
                            Ce projet m'a permis de développer de nombreuses compétences.
                            En premier lieu, j'ai travaillé sur l'analyse des besoins du client et la rédaction de spécifications fonctionnelles.
                            J'ai également renforcé mes compétences en développement front-end, en utilisant HTML, CSS, et JavaScript pour personnaliser l'interface utilisateur.
                            L'utilisation de Prestashop comme CMS m'a permis de comprendre les outils e-commerce et de configurer des fonctionnalités avancées, comme l'importation de catalogues produits depuis des fichiers Excel.
                            Enfin, ce projet m'a appris à collaborer efficacement en équipe et à appliquer les principes de la méthodologie Agile dans un contexte professionnel.
                        </p>
                    </Col>
                </Row>

                {/* Conclusion */}
                <Row className="project-conclusion">
                    <Col md={12}>
                        <h2>Conclusion</h2>
                        <p>
                            Ce projet m'a offert une expérience enrichissante tant sur le plan technique que sur le plan humain.
                            En travaillant avec un client réel, j'ai appris à écouter et comprendre des besoins spécifiques, puis à les transformer en solutions concrètes.
                            Le produit final est un site e-commerce abouti, qui reflète le travail collaboratif de toute l'équipe.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default PrestashopProject;

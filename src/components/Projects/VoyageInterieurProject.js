import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import voyage1 from "../../Assets/Projects/voyage/voyage1.png";
import voyage2 from "../../Assets/Projects/voyage/voyage2.png";
import voyage3 from "../../Assets/Projects/voyage/voyage3.png";

function VoyageInterieurProject() {
    return (
        <Container fluid className="project-details-section">
            <Particle />
            <Container>
                <h1 className="project-title">Voyage Intérieur</h1>

                {/* Contexte du projet */}
                <Row className="project-content">
                    <Col md={6}>
                        <h2>Contexte du projet</h2>
                        <p>
                            Ce projet a été réalisé en équipe lors de la Nuit de l'Info en décembre 2024.
                            Cet événement de développement intensif, organisé sur une nuit, visait à produire une application répondant à un thème donné.
                            En 2024, le thème portait sur la sensibilisation aux enjeux environnementaux, et notre équipe a choisi d'explorer les similitudes entre
                            le corps humain et l'océan pour créer une expérience immersive et éducative.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={voyage1}
                            alt="Contexte du projet Voyage Intérieur"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Col>
                </Row>

                {/* Méthodes de travail */}
                <Row className="project-content">
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={voyage2}
                            alt="Page éducative du projet"
                            className="project-image"
                            style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Méthodes de travail</h2>
                        <p>
                            Nous avons adopté une approche collaborative en utilisant GitHub pour gérer le code et Trello pour organiser les tâches.
                            Chaque membre a été assigné à un aspect spécifique du projet, et des points réguliers ont permis de synchroniser les efforts.
                            La stack principale comprenait React pour le front-end et TypeScript pour structurer et sécuriser le code.
                            Les défis comprenaient la gestion du temps (12 heures pour produire un produit fini) et l'intégration des fonctionnalités interactives.
                        </p>
                    </Col>
                </Row>

                {/* Résultats obtenus */}
                <Row className="project-content">
                    <Col md={6}>
                        <h2>Résultats obtenus</h2>
                        <p>
                            Le projet final est un site web immersif mettant en lumière les parallèles entre le corps humain et l'océan.
                            Il inclut des jeux interactifs pour engager les utilisateurs et des pages éducatives pour sensibiliser aux enjeux environnementaux.
                            Le retour des juges et des participants a souligné l'originalité de l'approche et la qualité de l'expérience utilisateur.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={voyage3}
                            alt="Exemple d'un jeu interactif"
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
                            Ce projet m'a permis de renforcer mes compétences en React et TypeScript, notamment dans la gestion des états et des composants interactifs.
                            J'ai également développé mes aptitudes en communication et en collaboration, en m'adaptant à une nouvelle équipe dans un contexte de forte pression.
                            Enfin, l'expérience a enrichi ma compréhension des problématiques environnementales et de leur intégration dans des projets numériques.
                        </p>
                    </Col>
                </Row>

                {/* Conclusion */}
                <Row className="project-conclusion">
                    <Col md={12}>
                        <h2>Conclusion</h2>
                        <p>
                            Participer à la Nuit de l'Info a été une expérience inoubliable, alliant créativité, collaboration, et apprentissage intensif.
                            Voyage Intérieur illustre la capacité des outils numériques à sensibiliser à des problématiques globales tout en offrant une
                            expérience engageante. Ce projet restera un point fort de mon parcours académique.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default VoyageInterieurProject;

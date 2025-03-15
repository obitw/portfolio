import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fortunae from "../../Assets/Projects/fortunae/fortunae.png";
import penguin from "../../Assets/Projects/penguin/penguin.png";
import baskets from "../../Assets/Projects/baskets.png";
import pdf from "../../Assets/competences.pdf";
import pdf2 from "../../Assets/competences2.pdf";
import competences from "../../Assets/Projects/competences.png";
import competences2 from "../../Assets/Projects/competences2.png";
import docteur from "../../Assets/Projects/voyage/voyage.png";
import hmdb from "../../Assets/Projects/hmdb/hmdb.png";
import prestashop from "../../Assets/Projects/prestashop/prestashop.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Mes <strong className="purple">projets</strong> récents
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={prestashop}
                  isBlog={false}
                  isInfo={true}
                  title="Mag's Divers"
                  description="Ce site e-commerce, spécialisé dans la vente de matériel de plongée, a été réalisé dans le cadre de la SAE du semestre 5 de mon BUT Informatique. En collaboration avec mon équipe, nous avons travaillé avec un client réel, organisant régulièrement des réunions pour recueillir ses retours et ajuster le projet en conséquence. Ce projet a permis d'appliquer des méthodologies de gestion de projet et de renforcer mes compétences en développement web."
                  demoLink="http://www.magsdiver.fr/"
                  infoLink="/project/prestashop"
                  technologies={["PHP", "JavaScript", "MySQL", "PrestaShop", "Excel"]}
                  softSkills={["Travail d'équipe", "Gestion de projet", "Etude du marché"]}
              />
            </Col>


            {/* Projet HMDB */}
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={hmdb}
                  isBlog={false}
                  isInfo={true}
                  title="Human Myeloma DataBase"
                  description="Ce stage de 12 semaines à l'Institut de Génétique Humaine (IGH) avait pour objectif d'améliorer un outil de gestion interne pour le suivi des patients atteints de myélome multiple. J'ai travaillé sur la migration vers PHP 8, corrigé des erreurs, et renforcé la sécurité de l'application, tout en développant de nouvelles fonctionnalités."
                  infoLink="/project/hmdb"
                  technologies={["PHP 8", "MySQL", "Javascript", "Docker", "Symfony"]}
                  softSkills={["Autonomie", "Analyse", "Gestion du temps + besoins"]}
              />
            </Col>

            {/* Projet Voyage Intérieur */}
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={docteur}
                  isBlog={false}
                  isInfo={true}
                  title="Voyage Intérieur"
                  description="Réalisé lors de la Nuit de l'Info 2024, ce projet en React et TypeScript explore les parallèles entre le corps humain et l'océan. Il inclut des jeux interactifs et des pages éducatives pour sensibiliser aux enjeux environnementaux. Cette expérience a renforcé mes compétences en travail d'équipe et en développement front-end."
                  infoLink="/project/voyage"
                  demoLink="https://select-from-talents.github.io/DocteurOcean/"
                  technologies={["React", "TypeScript", "CSS", "HTML"]}
                  softSkills={["Travail d'équipe", "Créativité", "Sensibilisation"]}
              />
            </Col>

            {/* Projet Fortunae */}
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={fortunae}
                  isBlog={false}
                  isInfo={true}
                  title="Fortunae"
                  infoLink="/project/fortunae"
                  description="Une machine à sous en ligne développée en PHP et JavaScript dans le cadre d'une SAE. Ce projet, réalisé en équipe, a permis de mettre en pratique la méthode agile avec la planification de sprints, la tenue de réunions journalières, et l'adoption de bonnes pratiques de développement."
                  technologies={["PHP", "JavaScript", "MySql"]}
                  softSkills={["Travail d'équipe", "Adaptabilité", "Gestion de projet"]}
              />
            </Col>

            {/* Projet Penguin Ice Floe */}
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={penguin}
                  isBlog={false}
                  isInfo={true}
                  title="The Penguin Ice Floe"
                  infoLink="/project/penguin"
                  description="Réalisé lors de la Nuit de l'Informatique 2023, ce projet sensibilise aux enjeux écologiques à travers des pages éducatives et des quizz interactifs. J'ai principalement contribué à l'intégration d'une base de données MySQL pour gérer les questions et réponses du quizz."
                  technologies={["MySQL", "PHP", "BootStrap"]}
                  softSkills={["Collaboration", "Sensibilisation", "Rédaction"]}
              />
            </Col>

            {/* Projet Site de vente de baskets */}
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={baskets}
                  isBlog={false}
                  title="Site de vente de baskets"
                  description="Un site web développé en PHP pour la gestion d'un e-commerce, incluant des fonctionnalités comme l'inscription des utilisateurs, l'ajout au panier, et une interface d'administration pour la gestion des produits."
                  technologies={["PHP", "MySQL", "BootStrap", "Modèle MVC"]}
                  softSkills={["Organisation", "Travail d'équipe"]}
              />
            </Col>

            {/* Projet Portfolio d'apprentissage
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={competences}
                  isBlog={false}
                  title="Portfolio d'apprentissage BUT2"
                  description="Un portfolio détaillant mon parcours d'apprentissage à travers des projets significatifs, incluant des compétences en modélisation, sécurisation des systèmes d'information, et optimisation des performances."
                  demoLink={pdf}
              />
            </Col>
            */}

            {/* Projet Portfolio d'apprentissage*/}
            <Col md={6} className="project-card mb-4">
              <ProjectCard
                  imgPath={competences2}
                  isBlog={false}
                  title="Portfolio d'apprentissage BUT3"
                  description="Un portfolio détaillant mon parcours d'apprentissage à travers des projets significatifs, incluant les compétences Réaliser, Conduire et Collaborer."
                  demoLink={pdf2}
                  technologies={["Vue.js", "JavaScript", "API"]}
                  softSkills={["Réaliser", "Conduire", "Collaborer"]}
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Projects;

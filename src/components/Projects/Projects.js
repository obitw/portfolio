import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fortunae from "../../Assets/Projects/fortunae.png";
import penguin from "../../Assets/Projects/penguin.png";
import baskets from "../../Assets/Projects/baskets.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets </strong> récents
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fortunae}
              isBlog={false}
              title="Fortunae"
              description="Machine à sous en ligne développée en PHP, JavaScript, HTML et CSS. Ce projet a été réalise dans le cadre d'une SAE lors de mon premier semestre en deuxième année de BUT Informatique. J'ai travaillé au sein d'une équipe de 5 personnes et nous avons utilisé les principes de la méthode agile :
              mise en place d'un Scrum Master, Product Owner, réunions journalières, rétrospectives, plusieurs sprints, comptes rendus, etc."
              demoLink="https://webinfo.iutmontp.univ-montp2.fr/~ouchmani/base-projet/web/ControleurFrontal.php?action=afficherJeu&controleur=machineasous"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={penguin}
                isBlog={false}
                title="The Penguin Ice Floe"
                description="Site réalisé en équipe lors de la Nuit de L'Informatique en décembre 2023. Développé principalement en PHP, JavaScript (+ certains frameworks comme Bootsrtap), ce site met en avant les enjeux écologiques que traverse notre génération à travers des pages de sensibilisation, debunking, quizz (dont j'ai principalement travaillé), etc... Nous étions une équipe de 7 et ce projet nous a permis de nous pousser dans nos derniers retranchements (nuit blanche + 14h de travail intensif) afin d'élaborer la meilleure stratégie pour un rendu optimal dans les délais."
                demoLink="https://inforlion.fr/projects/ThePenguinIceFloe/web/controleurFrontal.php"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={baskets}
                isBlog={false}
                title="Site de vente de baskets"
                description="Ce site web a été dévéloppé dans le cadre d'un projet PHP à réaliser en quelques mois. J'ai travaillé au sein d'une éuipe de 3 personnes. Ce projet nous a permis de nous initialiser aux fonctionnalitées clées d'un site web : inscription/connexion, ajout d'un produit au panier, gestion d'une base de données, actions CRUD pour l'administrateur, etc...  "
                demoLink="https://webinfo.iutmontp.univ-montp2.fr/~ouchmani/site_web/web/controleurFrontal.php"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Ma première année de BUT Informatique"
                description="Pour plus de détails sur mes compétences et projets de première anneé, je vous invite à consulter ce portfolio qui lui est beaucoup plus détaillé et complet."
                demoLink="https://webinfo.iutmontp.univ-montp2.fr/~ouchmani/portfolioA1.pdf"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

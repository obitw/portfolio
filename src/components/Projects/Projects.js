import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fortunae from "../../Assets/Projects/fortunae.png";
import penguin from "../../Assets/Projects/penguin.png";
import baskets from "../../Assets/Projects/baskets.png";
import pdf from "../../Assets/competences.pdf";
import competences from "../../Assets/Projects/competences.png";
import docteur from "../../Assets/Projects/docteur.png"
import hmdb from "../../Assets/Projects/hmdb.png"

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
                imgPath={hmdb}
                isBlog={false}
                title="Human Myeloma DataBase"
                description="Ce stage de 12 semaines, réalisé à l'Institut de Génétique Humaine (IGH) dans le cadre de ma deuxième année de BUT informatique, avait pour objectif de déboguer et améliorer un outil de gestion interne destiné au suivi des patients atteints de Myélome Multiple. Développée en PHP avec Symfony et MySQL, l'application gère des données sensibles et facilite la recherche scientifique. Mon rôle a consisté à reprendre le code existant, corriger des erreurs, et apporter des améliorations significatives, notamment en renforçant la sécurité et en intégrant de nouvelles fonctionnalités adaptées aux besoins des chercheurs. Cette expérience m'a permis de consolider mes compétences techniques, d'appliquer des bonnes pratiques en génie logiciel, et de collaborer efficacement avec une équipe pluridisciplinaire."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fortunae}
              isBlog={false}
              title="Fortunae"
              description="La machine à sous en ligne, développée en PHP, JavaScript, HTML et CSS, représente l'un de mes projets marquants. Sa réalisation s'est inscrite dans le cadre d'une SAE durant mon premier semestre en deuxième année de BUT Informatique. Travaillant au sein d'une équipe de 5 personnes, nous avons mis en pratique les principes de la méthode agile. Cette approche a inclus la nomination d'un Scrum Master et d'un Product Owner, la tenue de réunions journalières, la réalisation de rétrospectives, l'adoption de plusieurs sprints, ainsi que la rédaction régulière de comptes rendus. Cette expérience a renforcé ma compréhension des méthodologies de développement et ma collaboration au sein d'une équipe agile."
              /*demoLink="https://webinfo.iutmontp.univ-montp2.fr/~ouchmani/base-projet/web/ControleurFrontal.php?action=afficherJeu&controleur=machineasous"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={docteur}
                isBlog={false}
                title="Voyage Intérieur"
                description="Ce projet a été réalisé en équipe lors de la Nuit de l'Info en décembre 2024. Développé principalement en React et TypeScript, le site offre une expérience immersive et éducative. En mettant en lumière les similitudes entre le corps humain et l'océan, il sensibilise aux enjeux environnementaux tout en favorisant l'introspection. Les fonctionnalités incluent des jeux interactifs et des pages de sensibilisation. Un des défis majeurs a été de m'adapter à une toute nouvelle équipe, ayant délibérément choisi de ne pas collaborer avec les mêmes membres que l'année précédente, ce qui a enrichi l'expérience et renforcé mes compétences en travail d'équipe."
                demoLink="https://select-from-talents.github.io/DocteurOcean/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={penguin}
                isBlog={false}
                title="The Penguin Ice Floe"
                description="Ce projet a été réalisé en équipe lors de la Nuit de l'Informatique en décembre 2023. Le site, développé principalement en PHP et JavaScript (avec l'utilisation de certains frameworks tels que Bootstrap), vise à mettre en lumière les enjeux écologiques auxquels notre génération est confrontée. Il propose des pages de sensibilisation, de debunking, ainsi qu'un quizz, sur lequel j'ai principalement contribué (utilisation d'une base de données MySql pour stocker les questions / réponses). Notre équipe, composée de 7 membres, a relevé le défi avec détermination, travaillant durant une nuit blanche et investissant 14 heures de travail intensif. Cette expérience nous a poussés à repousser nos limites pour élaborer la meilleure stratégie afin de livrer un projet optimal dans les délais impartis."
                /*demoLink="https://inforlion.fr/projects/ThePenguinIceFloe/web/controleurFrontal.php"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={baskets}
                isBlog={false}
                title="Site de vente de baskets"
                description="Ce site web, développé dans le cadre d'un projet PHP sur plusieurs semaines, a constitué une expérience enrichissante. Collaborant au sein d'une équipe de trois personnes, nous avons exploré les fonctionnalités essentielles d'un site web. Ce projet nous a permis de nous initier à des aspects cruciaux tels que l'inscription/connexion des utilisateurs, l'ajout de produits au panier, la gestion d'une base de données, ainsi que la mise en œuvre d'opérations CRUD pour l'administrateur. Cette initiative a renforcé mes compétences dans le développement web et la collaboration en équipe."
                /*demoLink="https://webinfo.iutmontp.univ-montp2.fr/~ouchmani/site_web/web/controleurFrontal.php"*/
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={competences}
                isBlog={false}
                title="Portfolio d'apprentissage"
                description="Cette ressource présente mon parcours d'apprentissage en optimisation, administration et gestion de données à travers des projets significatifs. Vous y trouverez des exemples concrets pour chaque compétence et apprentissage critique du BUT Informatique. J'ai développé des compétences en modélisation de situations complexes, en sécurisation des systèmes d'information et en respect des réglementations sur la protection des données. En utilisant des approches innovantes, j'ai optimisé les performances des applications tout en minimisant leur impact environnemental. Vous pouvez explorer chaque compétence pour découvrir mes réalisations et compétences clés en détail. Ce portfolio a été réalisé dans le cadre d'un module"
                demoLink={pdf}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

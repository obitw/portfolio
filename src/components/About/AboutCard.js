import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis actuellement en deuxième année de <span className="purple">BUT Informatique </span> à l'IUT de Montpellier, dans le parcours <span className="purple"> Intégration
            d'Applications et Management des Systèmes d'Information</span> (IAMSI).
            <br />
            Mes objectifs à long terme sont de devenir <span className="purple">Ingenieur en infomatique et gestion</span> et ainsi pouvoir opter pour le poste de <span className="purple">Directeur de Systèmes d'Information</span> (DSI).
            <br />
            <br />
            En dehors de l'informatique, j'ai aussi d'autres passions comme :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le football
            </li>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> L'autodidactisme
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La vraie richesse réside dans la quête constante du savoir"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

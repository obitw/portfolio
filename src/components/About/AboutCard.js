import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis actuellement en première année de cycle ingénieur à <span className="purple">Polytech Montpellier </span>, en alternace chez <span className="purple">Orange </span>.
            <br />
            Mes objectifs à long terme sont de devenir <span className="purple">Ingénieur en infomatique</span> et ainsi pouvoir opter pour le poste de <span className="purple">Directeur de Systèmes d'Information</span> (DSI).
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

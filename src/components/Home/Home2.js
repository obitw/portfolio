import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub, AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              QUI SUIS-JE ?
            </h1>
            <p className="home-about-body">
              Originaire de Barcelone, je suis un étudiant en informatique en deuxième année, spécialisé dans l'intégration des <b className="purple">systèmes d'informations</b> .
              <br />

              <br />Doté d'une passion précoce pour les technologies, je me démarque par mon <b className="purple">ouverture vers le monde</b> , illustrée par ma capacité à communiquer aisément dans <b className="purple">plusieurs langues  </b>  : espagnol, anglais, arabe…
              <br/> Cette diversité linguistique reflète mon désir de créer des ponts entre les <b className="purple">cultures</b>  et d'embrasser les opportunités globales.

              <br />

              <br /> Mon parcours académique et ma spécialisation actuelle témoignent de ma volonté de contribuer au <b className="purple">développement</b>  et à <b className="purple">l'efficacité</b>  des systèmes d'information au sein de notre société toujours plus connectée.

              <br />

              <br /> Je me définis par une approche intuitive de <b className="purple">l'apprentissage</b> , une pensée <b className="purple">analytique</b> , une tendance à la <b className="purple">prospection,</b>  et une assurance dans mon identité. Je suis naturellement porté vers <b className="purple">l'innovation</b>  et animé par une insatiable soif de <b className="purple">connaissances</b>.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Mes réseaux sociaux</h1>
            <p>
              N'hésitez surtout pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/obitw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ilias.ouchman@etu.umontpellier.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/ilias-ouchman-62a594264"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

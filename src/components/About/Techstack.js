import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1, DiMongodb, DiPython, DiGit, DiJava, DiHtml5, DiCss3, DiPhp, DiMysql, DiTerminal, DiScrum, DiSymfony
} from "react-icons/di";
import {
    SiPostgresql, SiVuedotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        <Col xs={4} md={2} className="tech-icons" title={"JavaScript"}>
            <DiJavascript1 title={"JavaScript"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"MongoDB"}>
            <DiMongodb title={"MongoDB"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Git"}>
            <DiGit title={"Git"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"PostgreSQL"}>
            <SiPostgresql title={"PostgreSQL"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Python"}>
            <DiPython title={"Python"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Java"}>
            <DiJava title={"Java"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"HTML"}>
            <DiHtml5 title={"HTML"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"CSS"}>
            <DiCss3 title={"CSS"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"PHP"}>
            <DiPhp title={"PHP"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"MySQL"}>
            <DiMysql title={"MySQL"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Shell"}>
            <DiTerminal title={"Shell"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Méthodes Agiles Scrum"}>
            <DiScrum title={"Méthodes Agiles Scrum"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Symfony"}>
            <DiSymfony title={"Symfony"} />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Vue.js"}>
            <SiVuedotjs title={"Vue.js"} />
        </Col>

    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode, SiIntellijidea, SiPhpstorm, SiXampp, SiLinux, SiWindows, SiWebstorm, SiGithub, SiGitlab,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" title={"VS Code"}>
        <SiVisualstudiocode title={"VS Code"}/>
      </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Windows"}>
            <SiWindows title={"Windows"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"ItellJ Idea"}>
            <SiIntellijidea title={"ItellJ Idea"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"XAMPP"}>
            <SiXampp title={"XAMPP"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"Linux"}>
            <SiLinux title={"Linux"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"WebStorm"}>
            <SiWebstorm title={"WebStorm"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"GitHub"}>
            <SiGithub title={"GitHub"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"GitLab"}>
            <SiGitlab title={"GitLab"}/>
        </Col>

        <Col xs={4} md={2} className="tech-icons" title={"PhpStorm"}>
            <SiPhpstorm title={"PhpStorm"}/>
        </Col>

    </Row>
  );
}

export default Toolstack;

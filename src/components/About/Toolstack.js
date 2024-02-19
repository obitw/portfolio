import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos, SiIntel, SiIntellijidea, SiPhpstorm, SiXampp, SiUbuntu, SiLinux, SiWindows, SiWebstorm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiWindows />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiIntellijidea />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiXampp />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiWebstorm />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPhpstorm />
        </Col>



    </Row>
  );
}

export default Toolstack;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
    const renderTags = (tags, variant) => {
        return tags.map((tag, index) => (
            <span
                key={index}
                className={`badge bg-${variant} text-light me-2 mb-2`}
                style={{ fontSize: "0.9rem" }}
            >
        {tag}
      </span>
        ));
    };

    return (
        <Card className="project-card-view mb-4">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                {/* Tags Section */}
                <div className="mb-3">
                    <h6>Technologies :</h6>
                    {props.technologies && renderTags(props.technologies, "primary")}
                </div>
                <div className="mb-3">
                    <h6>Soft Skills :</h6>
                    {props.softSkills && renderTags(props.softSkills, "success")}
                </div>

                {/* Demo and Info Buttons */}
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        className="me-2"
                    >
                        Voir Demo
                    </Button>
                )}
                {props.isInfo && (
                    <Button variant="secondary" href={props.infoLink}>
                        En savoir plus
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;

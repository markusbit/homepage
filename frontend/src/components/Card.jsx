import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CustomCard = (props) => {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath ? props.imgPath : 'https://via.placeholder.com/400'} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank">
                    Demo
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CustomCard; 
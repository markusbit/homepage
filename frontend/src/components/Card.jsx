import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CustomCard = (props) => {
    return (
        <Card className="custom-card">
            <Card.Img src={props.imgPath ? props.imgPath : 'https://via.placeholder.com/400'} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    {props.description}
                </Card.Text>
                {"\n"}
                {"\n"}

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
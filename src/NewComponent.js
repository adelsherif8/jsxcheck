import Names from "./ComponentPepsi/Name";
import Price from "./ComponentPepsi/Price";
import Description from "./ComponentPepsi/Description";
import Image from "./ComponentPepsi/Image";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
function NewComponent({ firstName }) {
  return (
    <div>
      <Card
        className="card"
        style={{
          marginLeft: "600px",
          backgroundColor: "#004B93",
          width: "18rem",
          borderRadius: 20,
        }}
      >
        <div className="imgg">
          <Image />
        </div>

        <Card.Body className="body">
          <Card.Title>
            <Names />
            <Price />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>

          <a href="https://www.pepsi.com/">
            <Button style={{ marginLeft: "7rem" }} variant="primary">
              Go to Website
            </Button>
          </a>
        </Card.Body>
      </Card>
      <div style={{ fontSize: 100 }}>
        <p>Hello, {firstName ? `${firstName}!` : "there!"}</p>
      </div>
    </div>
  );
}

export default NewComponent;

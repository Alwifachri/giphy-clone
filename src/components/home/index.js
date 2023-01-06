import { Card, Col, Row } from "react-bootstrap";
import "./index.css";

function Intro() {
  return (
    <div className="container">
      <div className="intro-container " id="home">
        <Row className="row">
          <Col className="card-gif">
            <Card style={{ width: "30rem" }}>
              <Card.Img className="card-img1" variant="top" src="/giphy.gif" />
            </Card>
          </Col>
          <Col className="welcome">
            <div className="hello">HELLO!</div>
            <div className="Intro1">Welcome to</div>
            <div className="Intro2">Giphy App Clone</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Intro;

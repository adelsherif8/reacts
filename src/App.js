import React from "react";
import { Container, Navbar, Nav, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Nav className="nav" variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Container className="cont">
        <h1>Welcome to games</h1>
        <div className="cards">
          <Card classname="card" style={{ width: "200px" }}>
            <Card.Img className="pic" variant="top" src="./img/fifa.png" />
            <Card.Body>
              <Card.Title>this is FIFA</Card.Title>
              <Card.Text>
                fifa is a football game that can be played both online and
                offline
              </Card.Text>
              <a
                href="https://www.ea.com/games/fifa/fifa-23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Go to FIFA</Button>
              </a>
            </Card.Body>
          </Card>
          <Card classname="card" style={{ width: "200px" }}>
            <Card.Img className="pic" variant="top" src="./img/gta.jpg" />
            <Card.Body>
              <Card.Title>this is GTA</Card.Title>
              <Card.Text>
                gta is a freeplay action game that can be played both online and
                offline
              </Card.Text>
              <a
                href="https://www.rockstargames.com/gta-v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Go to GTA</Button>
              </a>
            </Card.Body>
          </Card>
          <Card classname="card" style={{ width: "200px" }}>
            <Card.Img className="pic" variant="top" src="./img/cod.jpg" />
            <Card.Body>
              <Card.Title>this is COD</Card.Title>
              <Card.Text>
                COD is a war game that can be played both online and offline
              </Card.Text>
              <a
                href="https://www.callofduty.com/ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Go to COD</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;

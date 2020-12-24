import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const NowPlaying = () => {
  return (
    <Container className="m-auto">
      <Row className="align-items-center">
        <Col sm="4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/df/RLaMontagne_PartLight.jpg"
            alt="album-cover"
            class="album-cover"
          />
        </Col>
        <Col sm="1" />
        <Col sm="7">
          <Row className="track-col">
            <h2 className="track-name">
              Such a Simple Thing Such a Simple Thing Such a Simple Thing
            </h2>
          </Row>
          <Row>
            <p>
              Ray LaMontagne •{" "}
              <span class="font-weight-light">Part of the Light</span>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NowPlaying;

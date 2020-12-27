import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const NowPlaying = (props) => {
  const { artist, album, artUrl, isPlaying, track } = props;
  console.log(artUrl);

  return (
    <Container className="m-auto">
      <Row className="align-items-center">
        <Col sm="4">
          <img src={`${artUrl}`} alt="album-cover" className="album-cover" />
        </Col>
        <Col sm="1" />
        <Col sm="7">
          <Row className="track-col">
            <h2 className="track-name">{track}</h2>
          </Row>
          <Row>
            <p>
              {artist} • <span className="font-weight-light">{album}</span>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NowPlaying;

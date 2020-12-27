import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import AlbumGallery from "../AlbumGallery";
import NowPlaying from "../NowPlaying";
import Turntable from "../Turntable";
import { useComponentLogic } from "./hooks";

const Main = () => {
  const {
    artist,
    album,
    backgroundColor,
    artUrl,
    isPlaying,
    track,
  } = useComponentLogic();

  if (!isPlaying) {
    return <AlbumGallery />;
  }
  return (
    <Container
      fluid
      className="d-flex"
      style={{
        background: backgroundColor ? backgroundColor : "#9dbc96",
      }}
    >
      <NowPlaying
        artist={artist}
        album={album}
        artUrl={artUrl}
        isPlaying={isPlaying}
        track={track}
      />
    </Container>
  );
};

export default Main;

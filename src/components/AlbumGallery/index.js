import React from "react";
import Gallery from "react-photo-gallery";
import { getAlbumArt } from "./hooks";

const AlbumGallery = () => {
  const photos = getAlbumArt();

  return <Gallery photos={photos} />;
};

export default AlbumGallery;

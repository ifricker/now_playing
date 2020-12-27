import React from "react";

export const getAlbumArt = () => {
  const liked_songs_url =
    "https://cors-anywhere.herokuapp.com/https://music.apple.com/us/playlist/liked-songs/pl.u-RRbVv1JI2klgM";
  fetch(liked_songs_url)
    .then((result) => {
      debugger;
    });
  return [{},{},{}] ;
};

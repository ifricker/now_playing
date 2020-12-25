import React, { useState, useEffect } from "react";
import { usePalette } from "react-palette";

import usePolling from "../../shared/usePolling";

export const useComponentLogic = () => {
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [track, setTrack] = useState("");
  const [artUrl, setArtUrl] = useState();
  const [isPlaying, setIsPlaying] = useState("false");
  const loadImage = async imgUrl => {
    console.log(imgUrl);
    let req = new Request(imgUrl);
    req.allowInsecureRequest = true;
    let image = await req.loadImage();
    return image;
  };
  const [isPolling, startPolling, stopPolling] = usePolling({
    url: "http://localhost:5005/state",
    interval: 5000,
    onSuccess: response => {
      setIsPlaying(response.playbackState === "PLAYING");
      setArtist(response.currentTrack.artist);
      setAlbum(response.currentTrack.album);
      setTrack(response.currentTrack.title);
      let albumArtUri = response.currentTrack.albumArtUri;
      if (albumArtUri.indexOf("http") > -1) {
        setArtUrl(albumArtUri);
      } else {
        setArtUrl("192.168.1.95:1400" + albumArtUri);
      }
      setArtUrl("192.168.1.95:1400" + albumArtUri);
      const albumArt = loadImage(artUrl);

      // debugger;
      // setArtUrl(`192.168.1.95:1400${albumArtUrl}`);
      // setArtUrl(`${albumArt}`);
    },
    method: "GET"
  });
  if (!isPolling) {
    startPolling();
  }

  const { data } = usePalette(artUrl);

  return {
    artist,
    album,
    backgroundColor: data.vibrant,
    artUrl,
    isPlaying,
    track
  };
};

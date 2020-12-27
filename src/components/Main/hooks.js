import React, { useState, useEffect } from "react";
import { usePalette } from "react-palette";

import usePolling from "../../shared/usePolling";

export const useComponentLogic = () => {
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [track, setTrack] = useState("");
  const [artUrl, setArtUrl] = useState();
  const [isPlaying, setIsPlaying] = useState("false");
  const [isPolling, startPolling, stopPolling] = usePolling({
    url: "http://localhost:5005/state",
    interval: 5000,
    onSuccess: (response) => {
      setIsPlaying(response.playbackState === "PLAYING");
      setArtist(response.currentTrack.artist);
      setAlbum(response.currentTrack.album);
      setTrack(response.currentTrack.title);
      let albumArtUri = response.currentTrack.albumArtUri;
      // setArtUrl("http://192.168.1.95:1400" + albumArtUri);
      setArtUrl(albumArtUri);
    },
    method: "GET",
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
    track,
  };
};

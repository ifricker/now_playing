import Container from "react-bootstrap/Container";

import NowPlaying from "./components/NowPlaying";
import Turntable from "./components/Turntable";

import "./App.css";

const App = () => (
  <Container fluid className="p-3 d-flex mx-auto bkg-turntable">
    <NowPlaying />
  </Container>
);

export default App;

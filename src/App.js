import "./styles.css";
import Navbar from "./Navbar";
import HeroArea from "./HeroArea";
import Feature from "./Feature";
import Market from "./Market";
import Service from "./Service";
import Pricing from "./Pricing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <HeroArea />
      <Feature />
      <Market />
      <Service />
      <Pricing />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Wave from "./components/Wave";
import Puddle from "./components/Puddle";
import Randomizer from "./components/Randomizer";

function App() {
  return (
    <div className="app space">
      <Puddle />
      {/* <Wave /> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;

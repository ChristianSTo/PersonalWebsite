import React, { useState, useEffect, useRef } from "react";
import "../blocks/main.css";

import Randomizer from "./Randomizer";
import Grid from "./Grid";
import BackGrid from "./BackGrid";
import Puddle from "./Puddle";
import ModeSwitch from "./ModeSwitch";

function Main() {
  return (
    <section className="main space">
      <ModeSwitch />
      <Randomizer />
      <Grid />
      <BackGrid />
    </section>
  );
}

export default Main;

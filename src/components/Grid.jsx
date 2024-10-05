import React, { useState, useEffect, useRef } from "react";
import "../blocks/grid.css";
import Card from "./Card";
import taiOVillage from "../assets/images/TaiOVillage.jpg";

function Grid() {
  const cardData = [
    { name: "Tai O Village", src: taiOVillage },
    { name: "2", src: "src2" },
    { name: "3", src: "src3" },
    { name: "4", src: "src4" },
    { name: "5", src: "src5" },
    { name: "6", src: "src6" },
    { name: "Tai O Village", src: taiOVillage },
    { name: "2", src: "src2" },
    { name: "3", src: "src3" },
    { name: "4", src: "src4" },
    { name: "5", src: "src5" },
    { name: "6", src: "src6" },
  ];

  return (
    <div className="grid">
      <h2 className="grid__title">Grid</h2>
      <ul className="grid__container space">
        {cardData.map((card, index) => (
          <li key={index} className="grid__card">
            <Card cardName={card.name} cardImage={card.src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grid;

// src/components/PhotoGallery.js
import React from "react";
import { Link } from "react-router-dom";
import KrishnajiImage from "./krishnaji.jpeg";
import ShivParvatiImage from "./shivparvatiji.jpeg";
import MermaidImage from "./mermaid.jpeg";
import PrincessImage from "./Princess.jpeg";
import RadhajiImage from "./radhaji.jpeg";
import BirdImage from "./bird.jpeg";
import RoseImage from "./rose.jpeg";
import SwanImage from "./swan.jpeg";

const PhotoGallery = () => {
  const photos = [
    KrishnajiImage,
    RadhajiImage,
    RoseImage,
    SwanImage,
    BirdImage,
    ShivParvatiImage,
    PrincessImage,
    MermaidImage,
  ];

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <Link to={`/photo/${index}`} key={index}>
          <img src={photo} alt={`Photo ${index + 1}`} />
        </Link>
      ))}
    </div>
  );
};

export default PhotoGallery;


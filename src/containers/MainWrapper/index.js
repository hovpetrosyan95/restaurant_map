import React from "react";

import MapSection from "../../components/MapSection";
import Restaurants from "../../components/Restaurants";

import './styles.scss';

export default function MainWrapper() {
  return (
    <div className="main-wrapper">
        <MapSection />
        <Restaurants />
    </div>
  );
}

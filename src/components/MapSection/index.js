import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import { mapAccessToken } from '../../config';
// move to config
mapboxgl.accessToken = mapAccessToken;
  
const lat = 40.177200;
const lng = 44.503490;
// map.on('load', () => alert('loaded'))
export default function MapSection() {
  const mapRef = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat], // starting position [lng, lat]
      zoom: 12
    });
  }, []);
  return <div ref={mapRef}>MapSection</div>;
}

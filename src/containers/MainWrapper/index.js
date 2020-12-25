import React, { useState, useRef, useEffect } from "react";

import mapboxgl from "mapbox-gl";

import MapSection from "../../components/MapSection";
import Restaurants from "../../components/Restaurants";
import usePrevious from "../../hooks/usePrevious";

import { mapAccessToken } from "../../config";

import restaurants from "./restaurants.json";

import "./styles.scss";

mapboxgl.accessToken = mapAccessToken;
const { Map, Marker, Popup } = mapboxgl;

export default function MainWrapper() {
  const [current, setCurrent] = useState(null);
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const [sortByName, setSortByName] = useState(null);
  const [sortByRating, setSortByRating] = useState(null);
  const previous = usePrevious(current);

  const [center, reCenter] = useState({
    lat: 40.1772,
    lng: 44.50349,
  });

  const [markers, setMarkers] = useState([]);

  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [center.lng, center.lat], // starting position [lng, lat]
      zoom: 12,
    });
    map.on("load", () => {
      const markers = restaurants.map((restaurant) => {
        const {
          coordinates: { lat, lng },
          title,
          description,
        } = restaurant;
        const marker = new Marker({
          color: "yellow",
        })
          .setLngLat([lng, lat])
          .setPopup(
            new Popup().setHTML(`<h3>${title}</h3><p>${description}</p>`)
          )
          .addTo(map);

        return { ...restaurant, marker };
      });

      setMarkers(markers);
    });
  }, []);

  useEffect(() => {
    if (previous) {
      previous.marker.togglePopup();
    }
    if (current) {
      current.marker.togglePopup();
    }
  }, [current]);

  useEffect(() => {
    if (sortByRating === "ASC") {
      setMarkers([...markers.sort((a, b) => a.rating - b.rating)]);
    }
    if (sortByRating === "DESC") {
      setMarkers([...markers.sort((a, b) => b.rating - a.rating)]);
    }
  }, [sortByRating]);
  useEffect(() => {
    if (sortByName === "ASC") {
      setMarkers([...markers.sort((a, b) => (a.title > b.title ? 1 : -1))]);
    }
    if (sortByName === "DESC") {
      setMarkers([...markers.sort((a, b) => -1*(a.title > b.title ? 1 : -1))]);
    }
  }, [sortByName]);

  return (
    <div className="main-wrapper">
      <MapSection
        restaurants={markers}
        setCurrent={setCurrent}
        current={current}
        mapRef={mapRef}
      />
      <Restaurants
        restaurants={markers}
        setCurrent={setCurrent}
        current={current}
        id={current && current.id}
        ratingRange={ratingRange}
        setRatingRange={setRatingRange}
        sorting={{ setSortByName, sortByName, setSortByRating, sortByRating }}
      />
    </div>
  );
}

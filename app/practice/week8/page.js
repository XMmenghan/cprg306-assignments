"use client";

import { View, Text } from "react";
import React from "react";
import { useState, useEffect } from "react";

export default function page() {
  const [randomDogUrl, setRandomDogUrl] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const getRandomDog = async (breed) => {
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    // const data = response.json(); this is a promise and not the actual data
    const url = data.message;
    setRandomDogUrl(url);
  };

  const getDogBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message); //get the keys of the object
    setDogBreeds(breeds);
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  useEffect(() => {
    getRandomDog();
    getDogBreeds();
  }, []); //empty array means run once

  useEffect(() => {
    if (selectedBreed === "") return;
    getRandomDog(selectedBreed);
  }, [selectedBreed]); //run when selectedBreed changes

  return (
    <div>
      <h1>Week 8</h1>
      <div>
        <select onChange={handleBreedChange}>
          {dogBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <p>
        <img src={randomDogUrl} />
      </p>
    </div>
  );
}

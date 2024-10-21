"use client";

import DogList from "./dog-list.js";
import DogForm from "./dogform.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]); //add dog to the list, spread operator,dog is the new dog,
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id)); //filter out the dog with the id that matches the id of the dog that was clicked
  };

  return (
    <div>
      <DogList dogs={dogs} onDeletDog={handleDeleteDog} />
      <DogForm onAddDog={handleAddDog} />
    </div>
  );
}

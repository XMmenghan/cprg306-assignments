"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");

  const hanlleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    let dog = { id, name, age };
    console.log(dog);
    onAddDog(dog);
  };

  return (
    <form onSubmit={hanlleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(parseInt(event.target.value))}
        />
      </label>
      <button type="submit">Add Dog</button>
    </form>
  );
}

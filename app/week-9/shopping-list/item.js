import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul>
      <li
        className="list-none bg-slate-900 hover:bg-orange-600 w-[20rem] m-4 p-2"
        onClick={() => onSelect(name)}
      >
        <h1 className="text-xl text-white font-bold">{name}</h1>
        <p className="text-white">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}

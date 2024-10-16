"use client";
//Remove all item variables (const item1 etc.) from the ItemList component.
//Import the useState hook from React, the Item component, and the items from the JSON file.
import Item from "./item";
import { useState } from "react";
import itemJson from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let item = [...itemJson];
  if (sortBy === "name") {
    item.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    item.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="sort-buttons">
        <button
          onClick={() => setSortBy("name")}
          className={
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }
        >
          Sort by Category
        </button>
      </div>
      <div>
        {item.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

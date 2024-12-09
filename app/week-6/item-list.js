"use client";
//Remove all item variables (const item1 etc.) from the ItemList component.
//Import the useState hook from React, the Item component, and the items from the JSON file.
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

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
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

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
        <label className="text-white font-bold ml-2">Sort By: </label>
        <button
          onClick={() => setSortBy("name")}
          className={
            sortBy === "name"
              ? "bg-orange-500 p-1 m-2 w-28 text-white"
              : "bg-orange-700 p-1 m-2 w-28 text-white"
          }
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={
            sortBy === "category"
              ? "bg-orange-500 p-1 m-2 w-28 text-white"
              : "bg-orange-700 p-1 m-2 w-28 text-white"
          }
        >
          Category
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

"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsJson from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsJson); // use itemsJson as initial state

  // handle adding new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  return (
    <main className="bg-[#020617] text-black-900">
      <h1 className="text-[28px] text-white font-bold ml-5">Shopping List</h1>
      {/* pass handleAddItem function to NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      {/* pass items state to ItemList component */}
      <ItemList items={items} />
    </main>
  );
}

"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && category) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: itemName,
        quantity: count,
        category: category.toLowerCase(),
      };
      onAddItem(newItem);
      setItemName("");
      setCount(1);
      setCategory("");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 h-48 rounded-lg text-black max-w-sm w-full"
    >
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
      </div>
      <div className="flex justify-between items-center ">
        <div className=" flex justify-between p-2 m-1 rounded-md  bg-white text-white w-36">
          <span className="text-black">{count}</span>
          <div className="flex">
            <button
              type="button"
              onClick={decrement}
              className="w-8 bg-blue-500 text-white font-semibold
                rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
                disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
              disabled={count == 1}
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              className="w-8 bg-blue-500 text-white font-semibold
                rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
                disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75 ml-1"
            >
              +
            </button>
          </div>
        </div>
        <select
          className="m-1 p-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value disabled>
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}

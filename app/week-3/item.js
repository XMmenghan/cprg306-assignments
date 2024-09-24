import React from "react";

export default function Item({name, quantity, category} ) {
  return (
      <ul className="bg-[#0F172A] m-2 w-[30%] pl-3 py-2">
        <li>
          <h1 className="text-xl text-white font-bold ">{name}</h1>
          <p className="text-white">
            Buy {quantity} in {category}
          </p>
        </li>

      </ul>

  );
}
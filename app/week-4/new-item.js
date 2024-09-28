"use client";
import { useState } from "react";

export default function NewItem() {
    const [count, setCount] = useState(1);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="p-2 m-4 bg-white text-black w-36 h-10 rounded-lg">
            <div className="flex justify-between">
                <span className="text-black">{count}</span>
                <div className="flex">
                <button onClick={decrement} className="w-8 bg-blue-500 text-white font-semibold
                rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
                disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"disabled={count == 1}>-</button>
                <button onClick={increment} className="w-8 bg-blue-500 text-white font-semibold
                rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
                disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75 ml-1">+</button>
                </div>
            </div>
            
        </div>
    );
}
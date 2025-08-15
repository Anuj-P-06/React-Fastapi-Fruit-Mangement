import React, { useEffect, useState } from "react";
import api from "../api.js";
import AddFruitForm from "./AddFruitForm.jsx";

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get("/fruits");
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName) => {
    try {
      await api.post("/fruits", { name: fruitName });
      fetchFruits(); // Refresh after adding
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  const deleteFruit = async (fruitName) => {
    try {
      await api.delete(`/fruits/${fruitName}`);
      fetchFruits(); // Refresh after deleting
    } catch (error) {
      console.error("Error deleting fruit", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold underline mb-4">Fruits List</h2>

      {/* Fruits with dot & button */}
      <ul className="list-disc list-inside space-y-3 mb-6">
        {fruits.map((fruit, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="font-medium">{fruit.name}</span>
            <button
              onClick={() => deleteFruit(fruit.name)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Add Fruit Form */}
      <AddFruitForm addFruit={addFruit} />
    </div>
  );
};

export default FruitList;


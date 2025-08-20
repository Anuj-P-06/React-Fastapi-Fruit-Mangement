import React, { useEffect, useState } from 'react';
import api from "../api.js";
import AddFruitForm from './AddFruitForm.jsx';

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get('/fruits');
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName) => {
    try {
      await api.post('/fruits', { name: fruitName });
      fetchFruits();  // Refresh after adding
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  const deleteFruit = async (fruitName) => {
    try {
      await api.delete(`/fruits/${fruitName}`);
      fetchFruits();  // Refresh after deleting
    } catch (error) {
      console.error("Error deleting fruit", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name}{" "}
            <button onClick={() => deleteFruit(fruit.name)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddFruitForm addFruit={addFruit} />
    </div>
  );
};

export default FruitList;

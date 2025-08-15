import React, { useState } from "react";

const AddFruitForm = ({ addFruit }) => {
	const [fruitName, setFruitName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (fruitName) {
			addFruit(fruitName);
			setFruitName("");
		}
	};

	return (
		<div className="flex justify-center mb-8">
			<form onSubmit={handleSubmit} className="flex gap-2">
				<input
					type="text"
					value={fruitName}
					onChange={(e) => setFruitName(e.target.value)}
					placeholder="Enter fruit name"
					className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
				/>
				<button 
					type="submit"
					className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
				>
					Add Fruit
				</button>
			</form>
		</div>
	);
};

export default AddFruitForm;

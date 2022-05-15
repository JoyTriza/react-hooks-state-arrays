import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [filterBy, setFilterBy] = useState("All");
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

function handleClick(id) {
  const newFoodArray = foods.map((food) => {
    if (food.id === id) {
      return {
        ...food, heatLevel:food.heatLevel +1,
      };
    }else {
      return food;
    }
  })
  setFoods(newFoodArray);
}

function handleFilterChange(event) {
  if (filterBy ==="All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
}
const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => (food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter">
        <option value= "All"> All </option>
        <option value= "American"> American </option>
        <option value= "Sichuan"> Sichuan </option>
        <option value= "Thai"> Thai </option>
        <option value= "Mexican"> Mexican </option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

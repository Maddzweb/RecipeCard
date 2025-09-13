import React from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
  const recipes = [
    {
      name: "Spaghetti Carbonara",
      cookingTime: 20,
      difficulty: "Easy",
      description: "Perfect creamy pasta dish with eggs and bacon",
      image: "https://images.unsplash.com/photo-1721223016303-20d0a106786a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: ["Pasta", "Eggs", "Bacon", "Cheese"],
      dietaryTags: ["Vegetarian"],
    },
    {
      name: "Quinoa Salad",
      cookingTime: 15,
      difficulty: "Medium",
      description: "Healthy and filling salad bowl",
      image: "https://plus.unsplash.com/premium_photo-1671485196355-32005a27fd02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: ["Quinoa", "Tomatoes", "Cucumber", "Olive oil"],
      dietaryTags: ["Vegan", "Gluten-Free"],
    },
    {
      name: "Chocolate Cake",
      cookingTime: 60,
      difficulty: "Hard",
      description: "Rich and decadent dessert",
      image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: ["Flour", "Cocoa", "Sugar", "Butter"],
      dietaryTags: ["Vegetarian"],
    },
    {
      name: "Fruit Bowl",
      cookingTime: 10,
      difficulty: "Easy",
      description: "Refreshing seasonal fruits mix",
      // No image → fallback will show
      dietaryTags: ["Vegan", "Gluten-Free"],
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </div>
  );
}

export default App;

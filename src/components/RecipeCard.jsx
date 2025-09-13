import React from "react";
import "./RecipeCard.css";

function RecipeCard({
  name,
  cookingTime,
  difficulty,
  description,
  image,
  ingredients = [],
  dietaryTags = [],
}) {
  const fallbackImage =
    "https://placehold.co/400x200?text=No+Image";

  const difficultyColors = {
    Easy: "green",
    Medium: "orange",
    Hard: "red",
  };

  return (
    <div className="recipe-card">
      <img
        src={image || fallbackImage}
        alt={name}
        className="recipe-image"
      />

      <div className="recipe-content">
        <h2>{name}</h2>
        <p className="time">⏱ {cookingTime} mins</p>
        <p
          className="difficulty"
          style={{ color: difficultyColors[difficulty] || "black" }}
        >
          {difficulty}
        </p>
        <p className="description">{description}</p>

        {ingredients.length > 0 && (
          <div className="ingredients">
            <h4>Ingredients:</h4>
            <ul>
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
        )}

        {dietaryTags.length > 0 && (
          <div className="tags">
            {dietaryTags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;

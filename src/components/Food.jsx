import React from "react";

function Food({ food }) {
  return (
    <div className="food-card">
      <div className="col">
        <div className="card">
          <img
            src={food.recipe.image}
            className="card-img-top"
            alt={food.recipe.label}
          />
          <div className="card-body">
            <h5 className="card-title"> {food.recipe.label} </h5>
            <ul className="list-group list-group-flush">
              {food.recipe.ingredientLines.map((l) => (
                <li className="list-group-item">{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;

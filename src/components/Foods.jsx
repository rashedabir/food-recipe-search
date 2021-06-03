import React from "react";
import { useSelector } from "react-redux";
import Food from "./Food";

function Foods() {
  const foods = useSelector((state) => state.foodReducer.foods);
  return (
    <>
      <div className="justify-content-between mt-3 d-flex container-lg">
        <h3 className="text-center">All Foods</h3>
        {Object.keys(foods).length > 1 ? (
          <h4> Total Found : {foods.length} </h4>
        ) : <h4>Not Found</h4>}
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 p-2 m-auto d-flex justify-content-center">
        {Object.keys(foods).length === 0
          ? null
          : foods.map((food) => <Food food={food} />)}
      </div>
    </>
  );
}

export default Foods;

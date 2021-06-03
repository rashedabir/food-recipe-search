import { SET_FOOD } from "../context/foodContext";

export const setFoodAction = (foods) => {
  return {
    type: SET_FOOD,
    payload: foods,
  };
};

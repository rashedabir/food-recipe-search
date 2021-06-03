import { SET_FOOD } from "../context/foodContext";

const initialState = {
  foods: [],
};

const setFoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return { ...state, foods: action.payload };

    default:
      return state;
  }
};

export default setFoodReducer;

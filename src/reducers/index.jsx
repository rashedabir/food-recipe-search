import { combineReducers } from "redux";
import setFoodReducer from "./foodReducer";

const reducers = combineReducers({
  foodReducer: setFoodReducer,
});

export default reducers;

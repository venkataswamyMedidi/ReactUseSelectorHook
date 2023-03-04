import { combineReducers } from "redux";
import dogReducer from "./Reducers/dogReducer";
import quoteReducer from "./Reducers/quoteReducer";

const singleReducer = combineReducers({
  dog: dogReducer,
  quote: quoteReducer
});

export default singleReducer;

import { createStore, applyMiddleware, compose } from "redux";
import singleReducer from "./index";
import thunk from "redux-thunk";

const store = createStore(
  singleReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => {
          return f;
        }
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

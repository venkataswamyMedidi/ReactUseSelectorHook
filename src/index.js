import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./selectAndDispatch";
import { Provider } from "react-redux";
import store from "./Redux/store";
import SelectAndDispatch from "./selectAndDispatch";
//import ReactDOM from 'react-dom';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <SelectAndDispatch />
    </Provider>
  </StrictMode>
);

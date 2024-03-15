import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import store from "./store/ReduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

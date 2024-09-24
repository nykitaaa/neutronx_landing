import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import redux from "services/redux/store";

import { App } from "App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/neutronx_landing">
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles/reset.css";
import "./styles/index.css";
import "./styles/App.css";
import store from "./Redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <checkInternetConnection>
        <App />
      </checkInternetConnection>
    </Provider>
  </React.StrictMode>
);

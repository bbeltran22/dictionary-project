import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer className="text-center mt-3">
      Coded By Breanna Beltran{" "}
      <a href="https://github.com/bbeltran22/dictionary-project">Open source</a>
    </footer>
  </React.StrictMode>
);

reportWebVitals();

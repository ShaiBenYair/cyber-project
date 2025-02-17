import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure this import is correct
import App from "./app"; // ✅ Ensure this file exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

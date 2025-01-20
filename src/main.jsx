import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log("fake api key: ", import.meta.env.KEY);
console.log("other variable prefixed with VITE: ", import.meta.env.VITE_TEST);

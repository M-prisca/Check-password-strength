import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CheckPassword from "./components/CheckPassword.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CheckPassword />
  </StrictMode>
);

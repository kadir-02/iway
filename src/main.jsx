import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./context/DataProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <Router>
      <App />
    </Router>
  </DataProvider>
);

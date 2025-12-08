import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./components/app/app";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

import { createRoot } from "react-dom/client";
import App from "./Pages/App";

import "./index.css";

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(<App />);

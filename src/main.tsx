import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const setVH = () => {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setVH();
window.addEventListener('resize', setVH);

createRoot(document.getElementById("root")!).render(
    <App />
);

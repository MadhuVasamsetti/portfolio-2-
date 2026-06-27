import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css";

import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(

<React.StrictMode>

<App/>

</React.StrictMode>

);
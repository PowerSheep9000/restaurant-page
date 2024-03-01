import { initialLoad } from "./initial-pageload.js";
import { menuLoad } from "./menu-pageload.js";
import { contactLoad } from "./contactLoad.js";
import "./style.css";

initialLoad();
//menuLoad();

const btn1 = document.getElementById("home");
btn1.addEventListener("click", initialLoad);

const btn2 = document.getElementById("menu");
btn2.addEventListener("click", menuLoad);

const btn3 = document.getElementById("contact");
btn3.addEventListener("click", contactLoad);
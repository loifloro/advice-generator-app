// import "normalize.css";
import "../main.scss";
import { generate_advice } from "./generate_advice";

var advice_btn = document.getElementById("get_advice");

advice_btn.addEventListener("click", () => {
  generate_advice();
});

window.addEventListener("load", () => {
  generate_advice();
});

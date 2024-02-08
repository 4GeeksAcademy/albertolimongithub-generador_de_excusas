/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let excusa = generarExcusa();
  console.log(excusa);
  document.querySelector("#excusa").innerHTML = excusa;
};

function generarExcusa() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  return (
    devolverInfo(who) +
    " " +
    devolverInfo(action) +
    " " +
    devolverInfo(what) +
    " " +
    devolverInfo(when)
  );
}

function devolverInfo(array) {
  let numRandom = Math.floor(Math.random() * array.length) + 0;
  return array[numRandom];
}

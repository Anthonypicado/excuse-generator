/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* funcion que se ejecuta al cargar la pagina */
window.onload = function() {
  document.querySelector("#excuseText").innerHTML = generarExcusas();
};
let generarExcusas = () => {
  let pronoun = ["Un/a", "La/El"];
  let subject = [
    "mosca π¦",
    "gato π±",
    "perro πΆ",
    "payaso π€‘",
    "abuelita π€Ά",
    "Mickey π­"
  ];
  let action = ["tomo mi", "tirΓ³ mi", "le grito a mi", "robo mi", "mordio mi"];
  let possetion = [
    "tarea π",
    "auto π",
    "bicicleta π²",
    "zapato π",
    "dedo del pie π¦Ά"
  ];
  let where = ["en la calle.", "en mi casa. π ", "en la entrada del colegio."];
  /* generando un numero aleatorio entr el largo de la aray */
  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};

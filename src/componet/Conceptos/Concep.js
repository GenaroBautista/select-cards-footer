import React from "react";

function concep() {
  let lado = parseInt(prompt("Ingrese el lado"));
  let superficie = lado * lado;

  return (
    <div>
      <label>Ingresa el lado del cuadrado</label>
      <label>Tienes una {superficie}</label>
    </div>
  );
}

export default concep;

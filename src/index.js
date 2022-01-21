import React from "react";
import ReactDOM from "react-dom";
import MultiElementos from "./components/MultiElementos";

const elemento = document.getElementById('root')
const jsx = <h1>Olá React!</h1>
ReactDOM.render(
    <div>
      <MultiElementos/>
    </div>
    ,elemento)
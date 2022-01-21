import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/PrimeiroComponente";

const elemento = document.getElementById('root')
const jsx = <h1>Olá React!</h1>
ReactDOM.render(<Primeiro name="Mateus"/>,elemento)
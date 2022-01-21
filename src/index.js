import React from "react";
import ReactDOM from "react-dom";
import {CompA as A,CompB as B}from "./components/DoisComponente";

const elemento = document.getElementById('root')
const jsx = <h1>Olá React!</h1>
ReactDOM.render(
    <div>
        <A valor="Boa men"/>
        <B valor="Tô de boa men"/>
    </div>
    ,elemento)
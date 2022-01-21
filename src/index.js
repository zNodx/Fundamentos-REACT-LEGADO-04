import React from "react";
import ReactDOM from "react-dom";
import MultiElementos from "./components/MultiElementos";
import Funcao from "./components/ComponenteComFuncao";
import Familia from "./components/Familia";
import Membro from "./components/Membro";
const elemento = document.getElementById('root')
const jsx = <h1>Olá React!</h1>
ReactDOM.render(
    <div>
        <Funcao/>
    </div>
    ,elemento)
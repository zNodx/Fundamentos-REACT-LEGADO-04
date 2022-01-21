import React from "react";
import ReactDOM from "react-dom";
import MultiElementos from "./components/MultiElementos";
import Familia from "./components/Familia";
import Membro from "./components/Membro";
const elemento = document.getElementById('root')
const jsx = <h1>Olá React!</h1>
ReactDOM.render(
    <div>
        <h1>Familia Lima</h1>
        <Familia sobreNome="Lima">
            <Membro nome="Marcos" />
            {/* <Membro nome="Mateus"/>
            <Membro nome="Maria"/>
            <Membro nome="Felipe"/> */}
        </Familia>
    </div>
    ,elemento)
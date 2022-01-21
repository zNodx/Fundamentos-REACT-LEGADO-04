import React from "react";
import ReactDOM from "react-dom";
import MultiElementos from "./components/MultiElementos";
import Funcao from "./components/ComponenteComFuncao";
import Familia from "./components/Familia";
import Classe from "./components/ComponenteClasse"
import Membro from "./components/Membro";
import Pai from "./components/Pai";
const elemento = document.getElementById('root')
const jsx = <h1>Olá React!</h1>
ReactDOM.render(
    <div>
        <Classe valor="Sou um componente de CLASSE!!!"/>
    </div>
    ,elemento)
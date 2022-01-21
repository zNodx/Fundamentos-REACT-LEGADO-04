import React from "react";

export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>

]


// Solução 03. Separar por array
// export default props => [
//     <h1>Parte 1</h1>,
//     <h2>Parte 2</h2>
// ]


// Solução 02. REACT FRAGMENT
// export default props => (
//     <>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </>
// )


// Solução 01. Mais usada!
// export default props => (
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>
// )
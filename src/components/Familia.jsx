import React,{cloneElement,Children} from "react";
import { childWithProps } from "../utils/utils";
export default props => 
    <div>

    {childWithProps(props)}
    {/* Soloção 3 - Usando Children.map */}
    {/* {Children.map(props.children, child => {
        return cloneElement(child, {...props})
    })} */}

    {/* Solução 2 - usando Spread */}
    {/* {cloneElement(props.children,{...props})} */}

      {/* Solução 1 */}
     {/* {cloneElement(props.children, 
    {sobreNome: props.sobreNome})} */}
        {/* {props.children} */}
    </div>
import React,{cloneElement,Children} from "react";

export default props => 
    <div>
          {cloneElement(props.children,{...props})}        
     {/* {cloneElement(props.children, 
    {sobreNome: props.sobreNome})} */}
        {/* {props.children} */}
    </div>
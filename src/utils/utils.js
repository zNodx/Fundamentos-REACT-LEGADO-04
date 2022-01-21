import React, { cloneElement, Children } from "react";

export function childWithProps(props) {
    return Children.map(props.children, child => {
        return cloneElement(child, { ...props })
    })
}
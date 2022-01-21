import React, {Component} from "react";

export default class Classe extends Component {
    render(){
        return (
            <h1>{this.props.valor}!</h1>
        )
    }
}
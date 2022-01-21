import React, {Component} from "react";

export default class Contador extends Component {

  

    maisUm = () =>{
        return this.props.numero++
    }
    
    render(){
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}
import React, { Component } from "react";
import MainMenu from "../MainMenu/MainMenu";

class Cart extends Component{

    constructor(props){
        super(props);
        this.state={
            values:[],
            totalCartCount:0,
            bill:0
        }
    }

    

    render(){
        
        return(
            <div>
                
                cart
            </div>
        )
    }
}
export default Cart;
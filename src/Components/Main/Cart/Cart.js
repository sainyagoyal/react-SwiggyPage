import React, { Component } from "react";
import MainMenu from "../MainMenu/MainMenu";
import './Cart.css';

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
            <div className="main-box-child3">
                
                <div>
                    <div style={{fontSize:32+"px" ,fontWeight:600}}>CART</div>
                    <div>from Box8-Desi Meals</div>
                    <div className="no-of-items" id="cart-no-of-items">0 Item</div>
                </div>
                <div className="cart-empty">
                    cart is empty
                </div>
                <div className="cart-item-big-box">
                 <div className="cart-item-box">
                    <div className="cart-icon-box"><img src="./images/non-veg.png" className="cart-icon"></img></div>
                    <div className="cart-item-name"> Chcken tikka</div>
                    <div className="cart-number-box">
                            <div className="cart-decrement">-</div>
                            <div className="cart-quantity">9</div>
                            <div className="cart-increment">+</div>
                    </div>
                        <div className="cart-price">Rs 699</div>
                </div> 
                </div>
                
                <div className="bill">
                    <div className="bill-box">
                        <div className="Subtotal">
                            Subtotal
                        </div>
                        <div className="totla-bill-price">
                            Rs699
                        </div>
                    </div>
                    <div>
                     <button className="checkout-button" id="checkout-button"> CHECKOUT</button>
                    </div>
                    
                </div>
            
            </div>
        )
    }
}
export default Cart;
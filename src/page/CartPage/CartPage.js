import React from "react";
import {connect} from 'react-redux'
import { totalBill } from "../../utility/cartUpdate";
import {VEG_ICON,NON_VEG_ICON} from '../../Images/image'
import './CartPage.css';

function CartPage (props){
    const {cartItems}=props;

     return(  
        <div className="cart-page-box">
            <h3 className="cart-page-heading">Order is placed!</h3>
            {
                cartItems.map((item)=>{
                    return(
                            <div className="cart-item-box">
                                <div className="cart-icon-box">
                                    <img src={(item.veg)? VEG_ICON : NON_VEG_ICON} className="cart-icon" alt="img"></img>
                                </div>
                                <div className="cart-item-name">{item.title}</div>
                                <div className="cart-number-box">
                                    <div className="cart-quantity">{item.qty}</div>
                                </div>
                                <div className="cart-price">Rs{item.price}</div>
                            </div> 
                        )
                })
            }
            <div className="bill-box">
                        <div className="Subtotal-cartpage">
                            Subtotal
                        </div>
                        <div className="totla-bill-price">
                            Rs {totalBill(cartItems)}
                        </div>
                    </div>
                   
        </div>
        )
        
     
}

const mapStateToProps=state=>{
    return{
        cartItems:state.cart.cartItems
    }
}


export default connect(mapStateToProps) (CartPage);
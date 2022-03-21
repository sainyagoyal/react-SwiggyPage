import React, { Component } from "react";
import { main_menu } from "../../../services/restrauntsData";
import RestrauntMainMenu from "../RestrauntMainMenu/RestrauntMainMenu";
import {VEG_ICON} from "../../../../../Images/image"
import {NON_VEG_ICON} from "../../../../../Images/image"
import {connect} from 'react-redux';
import { addCart, removeCart } from "../../../../../redux";
import './RestrauntCart.css';


function RestrauntCart (props){

        const {cartItems,onAdd,onRemove}=props;
        console.log("inside carrt ",cartItems);

        const totalCount=()=>{
            
            var totalCartCount=0;
            for(var x in cartItems){
                totalCartCount+=cartItems[x].qty;
            }
            return totalCartCount;
        }

        const totalBill=()=>{
            var bill=0;
            for(var x in cartItems){
                bill+=cartItems[x].price*cartItems[x].qty;
            }
            return bill;
        }

        if(totalCount()==0){
            return(
                <div className="cart-empty" style={{fontSize:32+"px" ,fontWeight:600}}>
                    CART EMPTY
                    </div> 
            )
        }
        
        else{
        return(
            <div className="main-box-child3"> 
                <div>
                    <div style={{fontSize:32+"px" ,fontWeight:600}}>CART</div>
                    <div>from kitchen of punjab</div>
                    <div className="no-of-items" id="cart-no-of-items">{totalCount()}</div>
                </div>
               
                   
                
                <div className="cart-item-big-box">
                    {
                        cartItems.map((item)=>{
                            return(
                                <div className="cart-item-box">
                                    <div className="cart-icon-box">

                                        <img src={(item.veg)? VEG_ICON : NON_VEG_ICON} className="cart-icon"></img>
                                        </div>
                                    <div className="cart-item-name">{item.title}</div>
                                    <div className="cart-number-box">
                            <div className="cart-decrement"onClick={()=>{
                                props.removeCart(item)
                            }} >-</div>
                            <div className="cart-quantity">{item.qty}</div>
                            <div className="cart-increment" onClick={()=>{
                                    console.log("item quantityyyyyyyy"+item);
                                        props.addCart(item)
                                    }}
                             >+</div>
                    </div>
                        <div className="cart-price">Rs{item.price}</div>
        </div> 
                            )
                        })
                    }
                   
                   
                
                </div>
                
                <div className="bill">
                    <div className="bill-box">
                        <div className="Subtotal">
                            Subtotal
                        </div>
                        <div className="totla-bill-price">
                            {totalBill()}
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

const mapStateToProps = state => {
    return {
      cartItems: state.cartItems
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        addCart: product => dispatch(addCart(product)),
        removeCart :product=>dispatch(removeCart(product))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( RestrauntCart);
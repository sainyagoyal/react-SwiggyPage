import React from "react";
import {Link } from "react-router-dom";
import {VEG_ICON} from "../../../../Images/image"
import {NON_VEG_ICON} from "../../../../Images/image"
import {connect} from 'react-redux';
import { addCart, removeCart,incrementMenuItem,decrementMenuItem } from "../../../../redux";
import {totalCount,totalBill} from '../../../../utility/cartUpdate'
import './RestrauntCart.css';



function RestrauntCart (props){

        const {cartItems,menuItems,addCart,removeCart,incrementMenuItem,decrementMenuItem}=props;
        if(totalCount(cartItems)===0){
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
                    <div className="no-of-items" id="cart-no-of-items">{totalCount(cartItems)}</div>
                </div>
               
                   
                
                <div className="cart-item-big-box">
                    {
                        cartItems.map((item)=>{
                            return(
                                <div className="cart-item-box">
                                    <div className="cart-icon-box">

                                        <img src={(item.veg)? VEG_ICON : NON_VEG_ICON} className="cart-icon" alt="img"></img>
                                        </div>
                                    <div className="cart-item-name">{item.title}</div>
                                    <div className="cart-number-box">
                            <div className="cart-decrement"onClick={()=>{
                                removeCart(item,cartItems)
                                decrementMenuItem(item,menuItems)

                            }} >-</div>
                            <div className="cart-quantity">{item.qty}</div>
                            <div className="cart-increment" onClick={()=>{
                                    incrementMenuItem(item,menuItems)
                                    addCart(item,cartItems)
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
                            {totalBill(cartItems)}
                        </div>
                    </div>
                    <div>
                        <Link to ='/cart' className="link-class">
                            <button className="checkout-button" > CHECKOUT</button>
                        </Link>
                    </div>
                    
                </div>
            
            </div>
        )
        }
    

}

const mapStateToProps = state => { 
    return {
      cartItems: state.cart.cartItems,
      menuItems: state.menu.menuItems
    }
    
  }

const mapDispatchToProps = dispatch =>{
    return{
        addCart: (product,cartItems) => dispatch(addCart(product,cartItems)),
        removeCart :(product,cartItems)=>dispatch(removeCart(product,cartItems)),
        incrementMenuItem :(product,menuItems) => dispatch(incrementMenuItem(product,menuItems)),
        decrementMenuItem: (product,menuItems)=> dispatch(decrementMenuItem(product,menuItems))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( RestrauntCart);
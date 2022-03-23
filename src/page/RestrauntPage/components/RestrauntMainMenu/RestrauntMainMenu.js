import React, { Component, useState } from "react";
import {VEG_ICON} from "../../../../Images/image";
import {NON_VEG_ICON} from "../../../../Images/image"
import './RestrauntMainMenu.css'
import {connect} from 'react-redux'
import {addCart,removeCart,incrementMenuItem,decrementMenuItem} from '../../../../redux/index'




function MainMenu (props){
    const {menuItems,cartItems}=props;
    
    
    return(
        <div>
            {menuItems.map((item)=>{  
                return(
                    <div className="border">
                        <div className="flex-container-row main-box-parent1 "> 
                            <div className="child-2-1">
                                {item.veg
                                ? <img src={VEG_ICON} className="header-icon" dataVal="veg"></img>
                                : <img src={NON_VEG_ICON} className="header-icon" dataVal="nonVeg"></img>
                            }
                                
                                <div className="name-of-dish">{item.title}</div>
                                <div className="price">{"Rs. "+ item.price}</div>
                                <div className="desciption-of-dish">{item.desc}</div>
                            </div>
                            <div class="child-2-2"> 
                                <img src={item.image} alt="food-image" width="118px" height="96px" style={{borderRadius: "6px"}}/>
                                <div className="add">
                                    <div className="decrement-main-menu" onClick={()=>{
                                        props.removeCart(item,cartItems)
                                        props.decrementMenuItem(item,menuItems)
                                        }}>-</div>
                                    <div className="item-quantity-main-menu">{(item.qty)?item.qty:"ADD"}</div>
                                    <div className="increment-main-menu" onClick={()=>{
                                    
                                    props.incrementMenuItem(item,menuItems)
                                        props.addCart(item,cartItems)
                                    }}
                                    >+</div>
                                </div>
                            </div>
                         </div>
                    </div>
                    )
            })}
        </div>)     
    
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
        removeCart:(product,cartItems) => dispatch(removeCart(product,cartItems)),
        incrementMenuItem :(product,menuItems) => dispatch(incrementMenuItem(product,menuItems)),
        decrementMenuItem: (product,menuItems)=> dispatch(decrementMenuItem(product,menuItems))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(MainMenu)
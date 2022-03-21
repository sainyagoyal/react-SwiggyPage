import React, { Component, useState } from "react";
import {VEG_ICON} from "../../../../../Images/image";
import {NON_VEG_ICON} from "../../../../../Images/image"
import './RestrauntMainMenu.css'
import {connect} from 'react-redux'
import {addCart,removeCart} from '../../../../../redux/index'




function MainMenu (props){
    const {mainMenu,mainMenuItems,setMainMenuItems}=props;
    
    function itemQuantityDecrease(product){
         const item=mainMenuItems.find((x)=>x.id === product.id);
         setMainMenuItems(mainMenuItems.map(x=> x.id===product.id? {...item,qty:Math.max(item.qty-1,0)}:x))
        
    }
    function itemQuantityIncrease(product){
         //To change quantity value in main menu
         const item=mainMenuItems.find((x)=>x.id === product.id);
         
         setMainMenuItems(mainMenuItems.map((x)=> x.id===product.id? {...item,qty:item.qty+1}:x))
        
    }
    
    return(
        <div>
            {mainMenuItems.map((item)=>{  
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
                                        props.removeCart(item)
                                        itemQuantityDecrease(item);
                                        }}>-</div>
                                    <div className="item-quantity-main-menu">{(item.qty)?item.qty:"ADD"}</div>
                                    <div className="increment-main-menu" onClick={()=>{
                                    console.log("item quantityyyyyyyy"+item);
                                    itemQuantityIncrease(item);
                                        props.addCart(item)
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
      cartItems: state.cartItems
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        addCart: product => dispatch(addCart(product)),
        removeCart:product => dispatch(removeCart(product))

    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(MainMenu)
import React, { Component, useState } from "react";
import RestrauntSideMenu from './RestrauntSideMenu/RestrauntSideMenu';
import RestrauntMainMenu from './RestrauntMainMenu/RestrauntMainMenu';
import RestrauntCart from './RestrauntCart/RestrauntCart';
import Filter from '../../helpers/Filter'

import './RestrauntMenu.css'

function RestrauntMain (props){
    const {sideMenu ,mainMenu}=props;
    const [cartItems,setcartItems]=useState([]);
   
   

    const onAdd=(product)=>{
        //To check if product already exist in cart then
        const exist=cartItems.find((x)=>x.id===product.id);
        //if product exist in cart then find that item inside cart and increase quantity of it
        if(exist){
          setcartItems(cartItems.map(x=> x.id===product.id ? {...exist,qty:exist.qty+1 }: x))
        }
        //In the else part the product does not exist in the cart, so add it to the cart
        else{
          setcartItems([...cartItems,{...product,qty:1}])
        }

        
    
      }

      const onRemove=(product)=>{
        //To check if product exist in cart
        const exist=cartItems.find(x=>x.id===product.id);
        //if quantity reaches to 1 and minus then filter only items with not that product id to display
        if(exist.qty===1)
        {
          setcartItems(cartItems.filter(x=>x.id!==product.id))
        }
        //Decrease the quantity by 1
        else{
          setcartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty-1}:x))
        }

        
      }

   
   
        return(
            <div className="main-box">
                 
                <div className="flex-container-row-main-menu-box">
                  <RestrauntSideMenu sideMenu={sideMenu}/>
                  <Filter onAdd={onAdd} onRemove={onRemove} mainMenu={mainMenu}/>
                  <RestrauntCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> 
                  </div>

            </div>
        );
    


    
}

export default RestrauntMain;
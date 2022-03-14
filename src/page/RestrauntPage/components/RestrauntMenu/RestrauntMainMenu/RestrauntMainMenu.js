import React, { Component } from "react";
import {VEG_ICON} from "../../../../../Images/image";
import {NON_VEG_ICON} from "../../../../../Images/image"
import './RestrauntMainMenu.css'

function itemQuantityDecrease(e){
    const div=e.target.nextElementSibling;
    let count=0;
    if(div.innerText!='ADD'){
        count=parseInt(div.innerText);
        count--;
        count=Math.max(0,count);
        if(count==0)
            div.innerText="ADD";
        else
        div.innerText=count;
    }
}
function itemQuantityIncrease(e){
    const div=e.target.previousElementSibling;
    let count=0;
    if(div.innerText=='ADD'){
        count++;
        div.innerText=count;
    }
    else{
        count=parseInt(div.innerText);
        count++;
        div.innerText=count;
    }
}

function MainMenu (props){
    const {mainMenu}=props;

        return(
             <div className="main-box-child2">  
                <div>
                <div className="main-box-heading1">Recommended</div>
                <div className="no-of-items">25 Items</div>
                </div>
                {mainMenu.map(item=>(
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
                                <div className="decrement-main-menu" onClick={itemQuantityDecrease}>-</div>
                                <div className="item-quantity-main-menu" >ADD</div>
                                <div className="increment-main-menu" on onClick={itemQuantityIncrease}>+</div>
                            </div>
                        </div>
                    </div>

                    </div>
                ))}
                
            </div>
          
        )
    
}
export default MainMenu
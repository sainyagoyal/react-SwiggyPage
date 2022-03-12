import React, { Component } from "react";
import vegIconImage from "../../../Images/veg.png";
import nonVegIconImage from "../../../Images/non-veg.png";
import main_menu_arr from '../../Data/itemList.js';
import './MainMenu.css'

class MainMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
        this.getData = this.getData.bind(this);
        this.itemQuantityDecrease=this.itemQuantityDecrease.bind(this);
        this.itemQuantityIncrease=this.itemQuantityIncrease.bind(this);
    }

    componentDidMount(){
        window.addEventListener('load',this.getData);
    }
    getData (){
        this.setState({
            items:main_menu_arr
        })
    }

    itemQuantityDecrease(e){
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

    itemQuantityIncrease(e){
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
    
    render(){
        return(
             <div className="main-box-child2">  
                <div>
                <div className="main-box-heading1">Recommended</div>
                <div className="no-of-items">25 Items</div>
                </div>
                {this.state.items.map(item=>(
                    <div className="border">
                        <div className="flex-container-row main-box-parent1 "> 
                        <div className="child-2-1">
                            {item.veg
                            ? <img src={vegIconImage} className="header-icon" dataVal="veg"></img>
                            : <img src={nonVegIconImage} className="header-icon" dataVal="nonVeg"></img>
                        }
                            
                            <div className="name-of-dish">{item.title}</div>
                            <div className="price">{"Rs. "+ item.price}</div>
                            <div className="desciption-of-dish">{item.desc}</div>
                        </div>
                        <div class="child-2-2"> 
                            <img src={item.image} alt="food-image" width="118px" height="96px" style={{borderRadius: "6px"}}/>
                            <div className="add">
                                <div className="decrement-main-menu" onClick={this.itemQuantityDecrease}>-</div>
                                <div className="item-quantity-main-menu" >ADD</div>
                                <div className="increment-main-menu" on onClick={this.itemQuantityIncrease}>+</div>
                            </div>
                        </div>
                    </div>

                    </div>
                ))}
                
            </div>
          
        )
    }
}
export default MainMenu
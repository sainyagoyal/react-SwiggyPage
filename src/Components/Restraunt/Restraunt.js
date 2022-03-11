import React, { Component } from "react";
import './Restraunt.css'

class Restraunt extends Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return (
            <div className="black-box">
                    <div className="flex-container-row-black-box ">
                        <div className="black-box-child1"> 
                            <img src={require('../../Images/food.jpeg')} alt="food-image" style={{ width: "100%", height:"165px"}}/>
                        </div>
                        <div className="black-box-child2">
                            <div className="black-box-heading">Kitchens of Punjab</div>
                            <div className="sub-heading-black-box">
                                <div>Punjabi,North Indian</div>
                            </div>
                        
                            <div>Bilekahalli,BTM-Bangalore</div>
                            <div className="flex-container-row">
                                <div>
                                    <div><i className="fa fa-cog"></i> 4.1</div>
                                    <div>100+ Ratimngs</div>
                                </div>
                                <div>
                                    <div>26 mins</div>
                                    <div>Delivery Time</div>
                                </div>
                                <div>
                                    <div><i className="fa fa-inr"></i> 400</div>
                                    <div>Cost for two</div>
                                </div>
                            </div>
                            <div className="flex-container-row">
                                <div className="search-fav-veg" style={{width:254+'px'}}>
                                    <input className="input-class" id="search-filter" type="text" placeholder="Search for dishes.."/>
                                </div>
                                <div className="search-fav-veg">
                                    <input type="checkbox" id="vegonly" name="vegonly" value="vegonly"/>
                                    <label >Veg only</label> 
                                
                                </div>
                                <div className="search-fav-veg">Favourite</div>
                            </div>
                        </div>
                        {/* <!-- offer --> */}
                        <div className="black-box-child3">
                            <div className="offer">OFFER</div>
                            <div> <img src=""/>20% off | Use code PARTY </div>
                            <div> <img src=""/><span>30% off up to Rs. 150 on orders above 400</span> <span>|</span><span>Use code JUMBO</span></div>
                        </div>
                    
                    
                    
                    </div>
                    
            </div>
        );
    }

}

export default Restraunt
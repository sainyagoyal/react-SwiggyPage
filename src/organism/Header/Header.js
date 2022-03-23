
import React, { Component } from "react";
import {SWIGGY_ICON} from "../../Images/image";
import swiggyIcon from "../../Images/swiggy.svg";
import IconText from'../../molecule/IconText/IconText';
import './Header.css';

function Header(props)  {
    const {rightHeaderItems}=props;
        return ( 
            <div>
                <div className="outer-header">
                    <div className="header"> 
                        <div className="sub-header1">
                            <div className="header-icon"> 
                                <img src={swiggyIcon} alt="" className="image-swiggy-icon"/> 
                            </div>
                            <div style={{marginLeft:"20px"}}>set location</div>
                        </div>
                        <div className="sub-header2">
                            {rightHeaderItems.map((item)=>{
                                return(
                                <IconText icon={item.icon} text={item.text}/>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="sub-header">
                    home/banaglaore/btm-bavnaglore/kitchens of punjab   
                </div>
            </div>   
        )
    
}

export default Header;
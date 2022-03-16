
import React, { Component } from "react";
import {SWIGGY_ICON} from "../../Images/image";
import swiggyIcon from "../../Images/swiggy.svg";
import IconText from'../../molecule/IconText/IconText';
import './Header.css';
import {rightHeaderItems} from './services/data';

function Header()  {
    const rightHeaderElements=rightHeaderItems;
    console.log(rightHeaderElements);
        return ( 
            <div>
                <div className="outer-header">
                    <div className="header"> 
                        <div className="sub-header1">
                            <div className="header-icon"> 
                                <img src={swiggyIcon} alt="" style={{width:"40px",height:"40px",marginRight:20+"px"}}/> 
                            </div>
                            <div style={{marginLeft:"20px"}}>set location</div>
                        </div>
                        <div className="sub-header2">
                            {rightHeaderElements.map((item)=>{
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
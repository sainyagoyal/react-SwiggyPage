
import React, { Component } from "react";
import {SWIGGY_ICON} from "../../Images/image";
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
                                <img src={SWIGGY_ICON} alt="" style={{width:40+"px",height:40+"px"}}/> 
                            </div>
                            <div>set location</div>
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
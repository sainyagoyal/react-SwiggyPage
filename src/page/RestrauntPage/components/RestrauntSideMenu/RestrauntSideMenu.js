import React, { Component } from 'react';
import {side_menu_arr} from'../../services/restrauntsData';
import './RestrauntSideMenu.css'


function RestrauntSideMenu(props){
  
   const {sideMenu}=props;
        return(
            
            <div className="main-box-parent2">
            <div className="main-box-child1" id="side_menu_id">
                {sideMenu.map( ele=>(
                    <div className="main-box-child1-items">{ele.name}</div>
                ))}
                
                
            </div>
        </div>
        )
    
}

export default RestrauntSideMenu;
import React, { Component } from "react";
import RestrauntSideMenu from './RestrauntSideMenu/RestrauntSideMenu';
import RestrauntMainMenu from './RestrauntMainMenu/RestrauntMainMenu'
import RestrauntCart from './RestrauntCart/RestrauntCart'

import './RestrauntMenu.css'

function RestrauntMain (props){
    const{sideMenu ,mainMenu}=props;

   
        return(
            <div className="main-box">
                <div className="flex-container-row-main-menu-box">
                   <RestrauntSideMenu sideMenu={sideMenu}/>
                   <RestrauntMainMenu mainMenu={mainMenu}/>
                   <RestrauntCart/>
                   
                </div>

            </div>
        );
    


    
}

export default RestrauntMain;
import React, { Component, useState } from "react";
import RestrauntSideMenu from '../RestrauntSideMenu/RestrauntSideMenu';
import RestrauntMainMenu from '../RestrauntMainMenu/RestrauntMainMenu';
import RestrauntCart from '../RestrauntCart/RestrauntCart';
import Filter from '../../helpers/Filter'
import './RestrauntMenu.css'

function RestrauntMain (props){
    const {sideMenu}=props;
   
        return(
            <div className="main-box">
                 
                <div className="flex-container-row-main-menu-box">
                  <RestrauntSideMenu sideMenu={sideMenu}/>
                  <Filter/>
                  <RestrauntCart /> 
                  </div>

            </div>
        );
    


    
}

export default RestrauntMain;
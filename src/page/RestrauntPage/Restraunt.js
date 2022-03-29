import React, { Component } from "react";
import Header from "../../organism/Header/Header";
import RestrauntDetails from "./components/RestrauntsDetails/RestrauntDetails";
import RestrauntMenu from "./components/RestrauntMenu/RestrauntMenu"
import main_menu_arr from './services/RestrauntMainMenuData/itemList';
import {side_menu_arr} from './services/restrauntsData';
import {restDetails} from './services/restrauntsData';
import './Restraunt.css';
import {rightHeaderItems} from '../../organism/Header/services/data'
import { RestrauntProvider } from "../../context/restaurantDetailsContext";

function Restraunt (){
    return(
      
        <RestrauntProvider value={restDetails}>
            <Header rightHeaderItems={rightHeaderItems}/>
            <RestrauntDetails />
            <RestrauntMenu sideMenu={side_menu_arr} mainMenu={main_menu_arr}/>
        </RestrauntProvider>
       
    )
}

export default Restraunt;

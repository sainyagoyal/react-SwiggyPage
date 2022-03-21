import React, { Component } from "react";
import {Provider} from 'react-redux'
import Header from "../../organism/Header/Header";
import RestrauntDetails from "./components/RestrauntsDetails/RestrauntDetails";
import RestrauntMenu from "./components/RestrauntMenu/RestrauntMenu"
import main_menu_arr from './services/RestrauntMainMenuData/itemList';
import {side_menu_arr} from './services/restrauntsData';
import {restDetails} from './services/restrauntsData';
import store from '../../redux/store'
import './Restraunt.css';

function Restraunt (){

    return(
        <Provider store={store}>
        <div>
        <Header/>
        <RestrauntDetails restDetail={restDetails}/>
        <RestrauntMenu sideMenu={side_menu_arr} mainMenu={main_menu_arr}/>
        </div>
        </Provider>
    )
}

export default Restraunt;

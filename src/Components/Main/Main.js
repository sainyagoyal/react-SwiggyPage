import React, { Component } from "react";
import MainMenu from "./MainMenu/MainMenu";
import SideMenu from './SideMenu/SideMenu';
import Cart from './Cart/Cart'
import './Main.css'

class Main extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="main-box">
                <div className="flex-container-row-main-menu-box">
                    <SideMenu/>
                    <MainMenu/>
                    <Cart/>
                </div>

            </div>
        );
    }


    
}

export default Main;
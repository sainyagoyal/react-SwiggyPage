import React, { Component } from 'react';
import side_menu_arr from "../../Data/data"
import './SideMenu.css'

class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            values:[]
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        window.addEventListener('load',this.getData);
    }

    getData(){
        this.setState({
            values:side_menu_arr
        })
       
    }

    render(){
        return(
            <div className="main-box-parent2">
            <div className="main-box-child1" id="side_menu_id">
                {this.state.values.map( ele=>(
                    <div className="main-box-child1-items">{ele.name}</div>
                ))}
                
                
            </div>
        </div>
        )
    }
}

export default SideMenu;
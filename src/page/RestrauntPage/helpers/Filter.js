import React,{useState} from "react";
import { vegFilter } from "../../../redux/index";
import RestrauntMainMenu from '../components/RestrauntMainMenu/RestrauntMainMenu'
import {connect} from 'react-redux'
import {searchFilter} from '../../../redux/index'


function Filter(props){

    const {menuItems,mainMenuOriginal,vegFilter,searchFilter}=props;
    const [vegChecked,setVegChecked]=useState(true);

    const vegOnly=()=>{
        console.log("inside veg onlky");
        setVegChecked(!vegChecked);
        vegFilter(mainMenuOriginal,vegChecked);
    }
    return(
         <div className="main-box-child2">  
        <div className="filter-box"> 
                        <div className="flex-container-row">
                                <div className="search-fav-veg" style={{width:254+'px'}}>
                                    <input className="input-class" id="search-filter" onChange={(e)=>searchFilter(mainMenuOriginal,e.target.value)} type="text" placeholder="Search for dishes.."/>
                                </div>
                                <div className="search-fav-veg">
                                    <input type="checkbox" onChange={()=>{vegOnly() }}/>
                                    <label >Veg only</label> 
                                
                                </div>
                                <div className="search-fav-veg">Favourite</div>
                        </div>
             </div>
            <div>
                <div className="main-box-heading1">Recommended</div>
                <div className="no-of-items">{menuItems.length}</div>
            </div>
            <RestrauntMainMenu  />

        </div>
    )
}

const mapStateToProps =state =>{

    return{
        mainMenuOriginal:state.menu.mainMenuOriginal,
        menuItems:state.menu.menuItems
    }
}

const mapDispatchToProps = dispatch =>{
    
    return{
        vegFilter:(mainMenuOriginal,flag)=> dispatch(vegFilter(mainMenuOriginal,flag)),
        searchFilter: (mainMenuOriginal,val)=>dispatch(searchFilter(mainMenuOriginal,val))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(Filter);
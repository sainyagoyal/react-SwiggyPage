import React,{useState} from "react";
import RestrauntMainMenu from '../components/RestrauntMenu/RestrauntMainMenu/RestrauntMainMenu'

function Filter(props){
    const {mainMenu,onAdd,onRemove}=props;
    const [mainMenuItems,setMainMenuItems]=useState([...mainMenu]);
    const [searchVal,setSearchVal] =useState("");
    const [vegChecked,setVegChecked]=useState(true);

    const vegFilter=()=>{
        setVegChecked(!vegChecked);
        let filterMainMenuItems=[];
        if(vegChecked){  
            for( let x in mainMenu){
                if(mainMenu[x].veg==true){
                    filterMainMenuItems.push(mainMenu[x]);
                }
            }
           
         setMainMenuItems(filterMainMenuItems);
        }
        else{
            for( let x in mainMenu){        
                    filterMainMenuItems.push(mainMenu[x]);   
            }
            setMainMenuItems(filterMainMenuItems);
        }
    }

    const searchFilter=(e)=>{
        let filterMainMenuItems=[];

        setSearchVal(e.target.value);
        for(var x in mainMenu){  
            if(mainMenu[x].title.includes(searchVal)){ 
                filterMainMenuItems.push(mainMenu[x]);
            }
        }
        setMainMenuItems(filterMainMenuItems);
    }

    return(
         <div className="main-box-child2">  
        <div className="filter-box"> 
                        <div className="flex-container-row">
                                <div className="search-fav-veg" style={{width:254+'px'}}>
                                    <input className="input-class" id="search-filter" onChange={searchFilter} type="text" placeholder="Search for dishes.."/>
                                </div>
                                <div className="search-fav-veg">
                                    <input type="checkbox" onChange={vegFilter}/>
                                    <label >Veg only</label> 
                                
                                </div>
                                <div className="search-fav-veg">Favourite</div>
                        </div>
             </div>
            <div>
                <div className="main-box-heading1">Recommended</div>
                <div className="no-of-items">{mainMenuItems.length}</div>
            </div>
            <RestrauntMainMenu  onAdd={onAdd} onRemove={onRemove} mainMenuItems={mainMenuItems} setMainMenuItems={setMainMenuItems}/>

        </div>
    )
}

export default Filter;
import { INCREMENT_MENU_ITEM } from "../actionTypes";
import { DECREMENT_MENU_ITEM } from "../actionTypes";
import { VEG_FILTER } from "../actionTypes";
import { SEARCH_FILTER } from "../actionTypes";
import main_menu_arr from "../../page/RestrauntPage/services/RestrauntMainMenuData/itemList"



const intitalState={
    mainMenuOriginal:main_menu_arr,
    menuItems:main_menu_arr,  
}
const menuItemReducer=(state=intitalState,action)=>{
    switch(action.type){
        case INCREMENT_MENU_ITEM:
            return{
                ...state,
                menuItems:action.payload
            }
        case DECREMENT_MENU_ITEM:
            return{
                ...state,
                menuItems:action.payload
            }
        case VEG_FILTER:
            return{
                ...state,
                menuItems:action.payload
            }
        case SEARCH_FILTER:
            return{
                ...state,
                menuItems:action.payload
            }

         default: return state

    }
}
export default menuItemReducer;
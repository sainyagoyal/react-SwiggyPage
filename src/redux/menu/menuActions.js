import { INCREMENT_MENU_ITEM } from "../actionTypes";
import { DECREMENT_MENU_ITEM } from "../actionTypes";
import { VEG_FILTER } from "../actionTypes";
import {SEARCH_FILTER} from '../actionTypes';
import {updateMenuItemQuantity} from '../../utility/menuItemQuantity';
import { vegFilterFunction } from "../../utility/menuItemQuantity";
import {searchFilterFunction} from '../../utility/menuItemQuantity'

export const incrementMenuItem=(product,menuItems)=>{
    const list=updateMenuItemQuantity(menuItems,product,1)
    return{
        type:INCREMENT_MENU_ITEM,
        payload:list
    }
}

export const decrementMenuItem=(product,menuItems)=>{
    const list =updateMenuItemQuantity(menuItems,product,-1)
    return{
        type:DECREMENT_MENU_ITEM,
        payload:list
    }
}

export const vegFilter=(menuItems,flag)=>{
  
    const list=vegFilterFunction(menuItems,flag);
    return{
        type:VEG_FILTER,
        payload:list
    }
   
}

export const searchFilter=(menuItems,val)=>{
    const list=searchFilterFunction(menuItems,val);
    return{
        type:SEARCH_FILTER,
        payload:list
    }
}
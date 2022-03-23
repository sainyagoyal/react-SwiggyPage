import { act } from "@testing-library/react";
import { ADD_CART } from "../actionTypes";
import { REMOVE_CART } from "../actionTypes";

const intitalState={
   cartItems:[]
}
const cartReducer = (state =intitalState,action)=>{
    switch(action.type){
        case ADD_CART:
                return{
                    ...state,
                    cartItems:action.payload
                }
        
        case REMOVE_CART:
            return {
                ...state,
                cartItems:action.payload
            }
            
              

        default: return state     
    }
}

export default cartReducer
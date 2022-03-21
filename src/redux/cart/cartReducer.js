import { act } from "@testing-library/react";
import { ADD_CART } from "./cartTypes";
import { REMOVE_CART } from "./cartTypes";

const intialState ={
    cartItems:[]
}

const cartReducer =(state = intialState,action)=>{
    switch(action.type){
        case ADD_CART:
            const exist=state.cartItems.find((x)=>x.id===action.payload.id);
            if(exist){
                const index =state.cartItems.findIndex((x)=>x.id==action.payload.id);
                const newArr=[...state.cartItems];
                newArr[index].qty+=1;
                return{
                    ...state,
                    cartItems:newArr
                }
            }
            else{
                return {
                    ...state,
                    cartItems:[...state.cartItems, {...action.payload,qty:1}]
                }
            } 
        
        case REMOVE_CART:
            const present =state.cartItems.find(x=>x.id===action.payload.id);
            if(present){
            if(present.qty===1){
                return{
                    ...state,
                    cartItems:state.cartItems.filter(x=>x.id!==action.payload.id)
                }
            }
            else{
                const index =state.cartItems.findIndex((x)=>x.id==action.payload.id);
                const newArr=[...state.cartItems];
                newArr[index].qty-=1;
                return{
                    ...state,
                    cartItems:newArr
                }
            }
            }
            else{
                return state
            }

        default: return state     
    }
}

export default cartReducer
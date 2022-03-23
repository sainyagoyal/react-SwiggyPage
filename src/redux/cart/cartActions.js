import { ADD_CART } from "../actionTypes";
import { REMOVE_CART} from "../actionTypes";
import { updateCart } from "../../utility/cartUpdate";


export const addCart=(product,cartItems) => {
    const list= updateCart(cartItems,product,1)
    return{
        type:ADD_CART,
        payload: list
    }
}

export const removeCart=(product,cartItems)=>{
    const list=updateCart(cartItems,product,-1);
    return{
        type:REMOVE_CART,
        payload:list
    }
}
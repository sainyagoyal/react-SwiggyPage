import { ADD_CART } from "./cartTypes";
import { REMOVE_CART} from "./cartTypes";


export const addCart=(product) => {
    return{
        type:ADD_CART,
        payload: product
    }
}

export const removeCart=(product)=>{
    return{
        type:REMOVE_CART,
        payload:product
    }
}
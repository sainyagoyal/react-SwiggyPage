import React from "react";
import { connect } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";
import {totalCount} from '../utility/cartUpdate'

function PrivateRoute(props){
    const {cartItems}=props;
    const isCartEmpty= totalCount(cartItems);
    return !isCartEmpty ? <Navigate to='/'/>:<Outlet/>
   
}

const mapStateToProps=state=>{
    return{
        cartItems:state.cart.cartItems
    }
}

export default connect(mapStateToProps)(PrivateRoute);
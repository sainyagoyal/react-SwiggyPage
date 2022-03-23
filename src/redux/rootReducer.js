import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer'
import menuItemReducer from './menu/menuReducers'

const rootReducer =combineReducers({
    menu:menuItemReducer,
    cart:cartReducer,
})

export default rootReducer
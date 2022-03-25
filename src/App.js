import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import PrivateRoute from './utility/privateRoute';
import './App.css';
import Restraunt from './page/RestrauntPage/Restraunt';
import CartPage from './page/CartPage/CartPage';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Restraunt/>}></Route>
        <Route exact path='/cart' element={<PrivateRoute/>}>
          <Route exact path='/cart' element={<CartPage/>}></Route>
        </Route>
      </Routes>
     
      </BrowserRouter>
      </Provider>
      
    
  );
}

export default App;



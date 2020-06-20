import React, { useReducer, useEffect } from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomeScreenPage from '../pages/HomeScreenPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import CartPage from '../pages/CartPage'
import FeedPage from '../pages/Home/FeedPage'
import RestaurantPage from '../pages/Home/RestaurantPage'
import SearchPage from '../pages/Home/SearchPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import UpdateProfilePage from '../pages/Profile/UpdateProfilePage'
import AddressPage from '../pages/AddressPage'
import UpdateAdressPage from '../pages/Profile/UpdateAdressPage'
import CartContext from '../contexts/CartContext'

const Routes = ()=>{
  const [state, dispatch] = useReducer()

  
    return(
      // <CartContext.Provider value={{
      //   restaurants: state.restaurants,
      //   cart: state.cart,
      //   products: state.products,
      //    dispatch: dispatch }}>
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomeScreenPage/>
          </Route>
          <Route exact path='/login'>
            <LoginPage/>
          </Route>
          <Route exact path='/SignUp'>
            <SignUpPage/>
          </Route>
          <Route exact path='/Address'>
            <AddressPage/>
          </Route>
          <Route exact path='/cart'>
            <CartPage/>
          </Route>
          <Route exact path='/home/feedPage'>
            <FeedPage/>
          </Route>
          <Route exact path='/home/Restaurant/:idRestaurant'>
            <RestaurantPage/>
          </Route>
          <Route exact path='/home/Search'>
            <SearchPage/>
          </Route>
          <Route exact path='/profile'>
            <ProfilePage/>
          </Route>
          <Route exact path='/profile/UpdateProfile'>
            <UpdateProfilePage/>
          </Route>
          <Route exact path='/profile/UpdateAdress'>
            <UpdateAdressPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    // </CartContext.Provider>
    )
}
export default Routes
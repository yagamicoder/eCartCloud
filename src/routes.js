import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './views/Login/LoginView';
import Home from './views/Home/HomeView';
import ProductDetail from './views/Products/ProductDetailView';
import NotFoundPage from './components/NotFoundPage.js';
import Cart from './views/Cart/CartView';
import Wishlist from './views/Wishlist/WishlistView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="welcome" component={Home}/>
    <Route path="product/:id" component={ProductDetail}/>
    <Route path="cart" component={Cart} />
    <Route path="wishlist" component={Wishlist}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

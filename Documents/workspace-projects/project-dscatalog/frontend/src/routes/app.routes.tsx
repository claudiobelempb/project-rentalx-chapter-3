import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import { Signin } from "../pages/Signin";
// import { List } from "../pages/List";
import Home from '../pages/Home';
import DashBoard from '../pages/DashBoard';
import CatalogList from 'pages/CatalogList';
import ProductDetail from 'pages/ProductDetail';
import Products from 'pages/Products';
import User from 'pages/User';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={CatalogList} />
        <Route path="/catalog/:id" component={ProductDetail} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={User} />
        {/* <Redirect from="dashboard" to={'/produtos'} exact /> */}
        {/* <Route path="/singin" element={<Signin/>}/> */}
        {/* <Route path="/list/:type" element={<List/>} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export { AppRoutes };

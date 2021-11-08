import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { Help } from "../components/Help";
import { ProductList } from "../components/admin/ProductList";
import { UsersList } from "../components/admin/UsersList";
import { AddProduct as formPageProduct } from "../components/admin/AddProduct";
import { Cart } from "../components/Cart";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { RegisterError } from "../components/RegisterError";
import { LoginError } from "../components/LoginError";
import { UserEdit } from "../components/UserEdit";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={ItemListContainer} />
          <Route path="/userEdit" component={UserEdit} />
          <Route path="/loginError" component={LoginError} />
          <Route path="/register" component={Register} />
          <Route path="/registerError" component={RegisterError}/>
          <Route path="/itemDetail/:id?" component={ItemDetailContainer} />
          <Route path="/itemList/:categoryId?" component={ItemListContainer} />
          <Route path="/help" component={Help} />
          <Route path="/productList" component={ProductList} />
          <Route path="/usersList" component={UsersList} />
          <Route path="/addProduct" component={formPageProduct} />
          <Route path="/editProduct/:id" component={formPageProduct} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

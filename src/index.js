import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.js";

//redux setup//
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Login from "views/Login";
import Forgotpassword from "views/Forgotpassword";
import Dashboard from "views/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Adduser from "./views/Adduser";
import  CustomModal from "./components/Modal/CustomModal"

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
   
    <Route path="/modal" render={props => <CustomModal {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/forgotPassword" render={props => <Forgotpassword {...props} />} />
      <Route path="/addUser" render={props => <Adduser {...props}/>}/>
      <Route path="/admin/table/addUser" render={props => <Adduser {...props}/>}/>
      <Route exact path="/admin/table/addUser" component={Adduser} />
      <Route path="/editUser" render={props => <Adduser {...props}/>}/>
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

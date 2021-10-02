import React from 'react'
import Header from '../components/Header';
import {BrowserRouter, Switch, Route} from  "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Footer from '../components/Footer';
import { Container } from 'postcss';
import Contactus from '../pages/contactus/Contactus';

function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/vps">
                    <Contactus/>
                </Route>
                <Route path="/hosting">
                    <div>hosting</div>
                </Route>
                <Route path="/domain">
                    <div>domain</div>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
            <Footer/>
            </BrowserRouter>
            
        </div>
    )
}

export default Routing

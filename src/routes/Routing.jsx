import React from 'react'
import Header from '../components/Header';
import {BrowserRouter, Switch, Route} from  "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"

function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/vps">
                    <div>Vps</div>
                </Route>
                <Route path="/hosting">
                    <div>hosting</div>
                </Route>
                <Route path="/domain">
                    <div>domain</div>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Routing

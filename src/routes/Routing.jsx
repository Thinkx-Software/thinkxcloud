import React from 'react'
import Header from '../components/Header';
import {BrowserRouter, Switch, Route} from  "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import Footer from '../components/Footer';
import SharedHosting from '../pages/HomePage/SharedHosting';
import VPSHosting from '../pages/VPSHosting';


function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/sharedhosting">
                    <SharedHosting/>
                </Route>
                <Route path="/vpshosting">
                  <VPSHosting/>
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

import React from 'react';
import Header from '../components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Footer from '../components/Footer';
import SharedHosting from '../pages/HomePage/SharedHosting';
import VPSHosting from '../pages/VPSHosting';
import SSL from '../pages/SSL';
import NotFound from '../pages/NotFound';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>

                    <Route path="/sharedhosting">
                        <SharedHosting />
                    </Route>

                    <Route path="/vpshosting">
                        <VPSHosting />
                    </Route>

                    <Route path="/ssl">
                        <SSL />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Routing;

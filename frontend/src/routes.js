import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './pages/home';
import Cidades from './pages/cidade';
import Clientes from './pages/clientes';
import Header from './components/Header';

export default function Routes() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/cidades">
                    <Cidades />
                </Route>
                <Route path="/clientes">
                    <Clientes />
                </Route>
            </Switch>
        </Router>
    )
}
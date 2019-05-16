import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ErrorScreen from "./error/index";
import Pokemons from "./pokemons/index";

class Screens extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Pokemons} exact />
                    <Route component={ErrorScreen} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Screens;

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NodeApp from '../Components/NodeApp';
import App from '../App';

export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={NodeApp} />
                    <Route path="/saga" component={App} />
                </Switch>
            </BrowserRouter>
        )
    }
}

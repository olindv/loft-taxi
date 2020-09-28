import React, { Component } from "react";
import "./App.scss";
import Header from "./Header.js";
import Map from "./Map.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Profile from "./Profile.js";
import { withRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

class App extends Component {
    render() {
        return (
            <>
                <div className="app" data-testid="App">
                    {(this.props.location.pathname === "/map" ||
                        this.props.location.pathname === "/profile") && (
                        <Header />
                    )}
                    <Switch>
                        <Route path="/" component={Registration} exact />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/map" component={Map} />
                        <PrivateRoute path="/profile" component={Profile} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default withRouter(App);

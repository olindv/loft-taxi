import React, { Component } from "react";
import "./App.scss";
import Header from "./Header.js";
import Map from "./Map.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Profile from "./Profile.js";
import { withRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { loginSuccess } from "./redux/actions/actions";
import { func } from "prop-types";

import * as Sentry from "@sentry/react";

const propTypes = {
  isLoggedIn: func,
};

class App extends Component {
  state = {
    initialLoad: true,
  };

  componentDidMount() {
    if (window.localStorage.getItem("token")) {
      this.props.isLoggedIn();
    }
    this.setState({ initialLoad: false });
  }

  render() {
    return (
      <>
        <Sentry.ErrorBoundary
          fallback={({ error, componentStack, resetError }) => (
            <React.Fragment>
              <div>You have encountered an error</div>
              <div>{error.toString()}</div>
              <div>{componentStack}</div>
              <button
                onClick={() => {
                  this.setState({ message: "This is my app" });
                  resetError();
                }}
              >
                Click here to reset!
              </button>
            </React.Fragment>
          )}
        >
          <div className="app" data-testid="app">
            {(this.props.location.pathname === "/map" ||
              this.props.location.pathname === "/profile") && <Header />}
            {!this.state.initialLoad && (
              <Switch>
                <Route path="/" component={Registration} exact />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            )}
          </div>
        </Sentry.ErrorBoundary>
      </>
    );
  }
}

App.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
  const token = window.localStorage.getItem("token");
  return {
    isLoggedIn: () => dispatch(loginSuccess(token)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));

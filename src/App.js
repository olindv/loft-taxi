import React, { Component } from "react";
import "./App.scss";
import Header from "./Header.js";
import Map from "./Map.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Profile from "./Profile.js";
import { withRouter, Switch, Route } from "react-router-dom";

export const AuthContext = React.createContext();

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  login = (email, password) => {
    this.setState({ isLoggedIn: true });
    this.props.history.push("/map");
  };
  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          isLoggedIn: this.state.isLoggedIn,
        }}
      >
        <>
          <div data-testid="App">
            {(this.props.location.pathname === "/map" ||
              this.props.location.pathname === "/profile") && (
              <Header pageName={this.state.currentPage} />
            )}
            <Switch>
              <Route path="/" component={Registration} exact />
              <Route path="/login" component={Login} />
              <Route path="/map" component={Map} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </>
      </AuthContext.Provider>
    );
  }
}

export default withRouter(App);

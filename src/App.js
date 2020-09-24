import React, { Component } from "react";
import "./App.scss";
import Header from "./Header.js";
import Map from "./Map.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Profile from "./Profile.js";

export const AuthContext = React.createContext();

class App extends Component {
  state = {
    currentPage: "login",
    isLoggedIn: false,
  };

  login = (email, password) => {
    this.setState({ currentPage: "map", isLoggedIn: true });
  };
  logout = () => {
    this.setState({ currentPage: "login", isLoggedIn: false });
  };
  changePage = (e) => {
    e.preventDefault();
    const namePage = e.target.name;
    this.setState({ currentPage: namePage });
  };
  renderPage = (pageName) => {
    switch (pageName) {
      case "map":
        return <Map changePage={this.changePage} />;
      case "registration":
        return (
          <Registration
            changePage={this.changePage}
            pageName={this.state.currentPage}
          />
        );
      case "profile":
        return <Profile changePage={this.changePage} />;
      default:
        return <Login changePage={this.changePage} />;
    }
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
            <Header
              pageName={this.state.currentPage}
              changePage={this.changePage}
            />
            {this.renderPage(this.state.currentPage)}
          </div>
        </>
      </AuthContext.Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import "normalize.css";
import "./App.scss";
import Header from "./Header.js";
import Map from "./Map.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Profile from "./Profile.js";

export const AuthContext = React.createContext();

class App extends Component {
  state = {
    name: "",
    isLoggedIn: false,
  };

  changePage = (e) => {
    e.preventDefault();
    const namePage = e.target.name;
    this.setState({ name: namePage });
  };
  renderPage = (pageName) => {
    switch (pageName) {
      case "map":
        return <Map changePage={this.changePage} />;
      case "login":
        return <Login changePage={this.changePage} />;
      case "profile":
        return <Profile changePage={this.changePage} />;
      default:
        return <Registration changePage={this.changePage} />;
    }
  };
  render() {
    const login = (email, password) => {
      this.setState({ name: "map" });
      console.log("login done");
    };
    const logout = () => {
      this.setState({ name: "login" });
      console.log("logout done");
    };
    return (
      <AuthContext.Provider value={{ login, logout }}>
        <>
          <Header pageName={this.state.name} changePage={this.changePage} />
          {this.renderPage(this.state.name)}
        </>
      </AuthContext.Provider>
    );
  }
}

export default App;

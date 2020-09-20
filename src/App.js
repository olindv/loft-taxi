import React, { Component } from "react";
// import "normalize.css";
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

  login = (email, password) => {
    if (email !== "123@mail.ru" || password !== "123") {
      return;
    }
    this.setState({ name: "map", isLoggedIn: true });
    console.log("login done");
  };
  logout = () => {
    this.setState({ name: "login", isLoggedIn: false });
    console.log("logout done");
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
      case "registration":
        return <Registration changePage={this.changePage} />;
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
          <Header pageName={this.state.name} changePage={this.changePage} />
          {this.renderPage(this.state.name)}
        </>
      </AuthContext.Provider>
    );
  }
}

export default App;

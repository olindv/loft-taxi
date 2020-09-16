import React, { Component } from "react";
import "normalize.css";
import "./App.scss";
import Header from "./Header.js";
import Map from "./Map.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Profile from "./Profile.js";

class App extends Component {
  state = {
    name: "",
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
    return (
      <>
        <Header pageName={this.state.name} changePage={this.changePage} />
        {this.renderPage(this.state.name)}
      </>
    );
  }
}

export default App;

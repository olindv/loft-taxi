import React, {Component} from 'react';
import 'normalize.css';
import './App.scss';
import Header from './Header.js'
import Map from './Map.js'
import Login from './Login.js'
import Registration from './Registration.js'
import Profile from './Profile.js'


class App extends Component {
  state = {
    renderPage: null,
    name: ''
  }
  changePage = (e) => {
    e.preventDefault();
    let namePage = e.target.name;
    this.setState({name: namePage})
    console.log(e)
  }
  render() {
    switch(this.state.name) {
      case "map":
        return <Map changePage={this.changePage}/>;
      case "login":
        return <Login changePage={this.changePage}/>;
      case "profile":
        return <Profile changePage={this.changePage}/>;
      default:
        return <Registration changePage={this.changePage}/>;
    }
  }
}

export default App;

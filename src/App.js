import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    const childProps = {
      thing: true
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Brand>
            <Link to="/">Geoquiz</Link>
          </Navbar.Brand>
        </Navbar>

        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;

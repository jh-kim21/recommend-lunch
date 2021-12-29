import React from "react";
import { NavItem, Badge, Nav, Collapse, DropdownItem } from "shards-react";
import { NavLink } from "react-router-dom";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.RedirectionHome = this.RedirectionHome.bind(this);
  }

  RedirectionHome() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <Nav navbar className="flex-row align-center">
        <NavItem className="">
          <NavLink
            className="nav-link-icon text-center" exact to="/"
            onClick={this.RedirectionHome}
          >
            <div className="nav-link-icon__wrapper">
              <img className="user-avatar rounded-circle " alt="home" src={require("./../../../../images/home.png")} />
            </div>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

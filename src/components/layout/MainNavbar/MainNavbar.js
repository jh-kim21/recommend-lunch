import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar, Nav, NavItem, NavLink, Badge} from "shards-react";

import MainNav from "./NavbarNav/MainNav";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-secondary",
    stickyTop && "sticky-top"
  );

  const logoStyle ={
    marginLeft : "1rem"
  }

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-center d-flex justify-content-between p-0">
          {/* <NavbarSearch />
          <NavbarNav />
          <NavbarToggle /> */}
          <img style={logoStyle} className="user-avatar " alt="home" src={require("./../../../images/logo.png")} />
          <MainNav/>
          <label className="user-avatar mr-5" alt="empty"  />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;

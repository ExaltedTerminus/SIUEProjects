import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Alignment
} from "@blueprintjs/core";

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Accounting Challenge</NavbarHeading>
          <NavbarDivider />
          <Link
            className="bp3-button bp3-minimal bp3-icon-home"
            to="/"
            icon="info-sign"
          >
            Info
          </Link>
          <Link
            className="bp3-button bp3-minimal bp3-icon-full-stacked-chart"
            to="/modulecontainer"
          >
            Modules
          </Link>
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Navigation;

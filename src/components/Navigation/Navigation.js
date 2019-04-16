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
          <NavbarHeading>Acchal</NavbarHeading>
          <NavbarDivider />
          <Link className="bp3-button bp3-minimal bp3-icon-home" to="/">
            Home
          </Link>
          <Link
            className="bp3-button bp3-minimal bp3-icon-full-stacked-chart"
            to="/modulecontainer"
          >
            Modules
          </Link>
          <Link
            className="bp3-button bp3-minimal bp3-icon-build"
            icon="document"
            to="/testingpage"
          >
            Testing Page
          </Link>
          <Link
            className="bp3-button bp3-minimal bp3-icon-application"
            icon="application"
            to="/clearstore"
          >
            Clear Store
          </Link>
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Navigation;

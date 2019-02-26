import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RouteContainer, DivStyle, NavContainer } from "./RoutesComponents";
import TestingPage from "../TestComponents/TestingPage";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import QuestContainer from "../Quiz/QuestContainer";

class Routes extends Component {
  render() {
    return (
      <RouteContainer>
        <Router>
          <DivStyle>
            <div>
              <NavContainer>
                <Navigation />
              </NavContainer>

              <Route exact path="/" component={Home} />
              <Route path="/testingpage" component={TestingPage} />
              <Route path="/questcontainer" component={QuestContainer} />
            </div>
          </DivStyle>
        </Router>
      </RouteContainer>
    );
  }
}

export default Routes;

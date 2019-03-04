import React, { Component } from "react";
import { HomeBase, ChildContainer, ImageStyle } from "./HomeComponents";
import bongocat from "./bongocat.png";
import { Card } from "@blueprintjs/core";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeBase>
        <Card>
          <h3>Home</h3>
          <ChildContainer>
            <ImageStyle src={bongocat} alt="bongocat" />
          </ChildContainer>
        </Card>
      </HomeBase>
    );
  }
}

export default Home;

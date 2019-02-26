import React, { Component } from "react";
import { HomeBase, ChildContainer, ImageStyle } from "./HomeComponents";
import bongocat from "./bongocat.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeBase>
        <h3>Home</h3>
        <ChildContainer>
          <ImageStyle src={bongocat} alt="bongocat" />
        </ChildContainer>
      </HomeBase>
    );
  }
}

export default Home;

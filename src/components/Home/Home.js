import React, { Component } from "react";
import { Card } from "@blueprintjs/core";
import styled from "styled-components";
const QuestStyle = styled.div`
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
  margin: auto;
  padding-top: 2%;
`;
class Home extends Component {
  state = {};
  render() {
    return (
      <QuestStyle>
        <Card>
          <h1>Welcome to the Accounting Challenge!</h1>
          <div class="bp3-callout .modifier">
            <h2 class="bp3-heading">Instructions</h2>
            <h4>
              You must complete the modules in sequence. A score of 80% is
              required to move on to the next module.
            </h4>
            <h4>
              You must watch the video proceeding the quiz in it's entirety
              before moving on to the questions.
            </h4>
            <h4>
              A four function calculator is available to you. In the top left
              click on "Tools" then "Calculator" You can also hit Ctrl-Shift-C
            </h4>
            <h4>
              Once a module is completed with a satisfactory grade, use the
              screenshot tool (Tools->Screenshot or Ctrl->Shift->S) to get a
              snapshot. Your professor will provide you the address to e-mail
              and what information is required along with the screenshot.
            </h4>
            <h4>
              Once ready to begin, click on the "Modules" tab in the top left.
            </h4>
          </div>
        </Card>
      </QuestStyle>
    );
  }
}

export default Home;

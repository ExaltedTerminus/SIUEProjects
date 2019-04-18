import React from "react";
import YouTube from "react-youtube";
import { Card, Button } from "@blueprintjs/core";
import styled from "styled-components";
import QuestContainer from "../Quiz/QuestContainer";
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
const PlayerStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const Module1 = "oxQxshZETWo";
const Module2 = "Q60e5acfir8";
const Module3 = "DY1SzcgVVow";
const Module4 = "qEeksOkiutk";
const Module5 = "XP9GkO1ri1Q";
const Module6 = "4SWKJOnwGX0";
const Module7 = "OI0CfdiUbF8";
const Module8 = "DwgjoF2gi10";
const Module9 = "fjiGwIvznkQ";
const Module10 = "TCGxsvbrOOs";
const module_links = [
  Module1,
  Module2,
  Module3,
  Module4,
  Module5,
  Module6,
  Module7,
  Module8,
  Module9,
  Module10
];

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      end: false,
      comp_state: 0
    };
    this.handleEnd = this.handleEnd.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  handleEnd() {
    this.setState({
      end: true
    });
  }
  handleDone() {
    this.setState({
      comp_state: 1
    });
  }
  renderWarning() {
    if (!this.props.modules.attempted) {
      return (
        <div class="bp3-callout .modifier">
          <h4 class="bp3-heading">Watch Video to Proceed</h4>
          Before continuing onto the quiz, you must watch the video in it's
          entirety.
        </div>
      );
    }
  }
  renderForce() {
    var opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
        controls: 0,
        cc_load_policy: 0,
        fs: 0,
        iv_load_policy: 3,
        rel: 0
      }
    };
    var module_num = this.props.title_name.replace("Module ", "") - 1;
    return (
      <QuestStyle>
        <Card>
          <TitleStyle>
            <h1>
              {this.props.title_name}: {this.props.sub_name}
            </h1>
          </TitleStyle>
          <PlayerStyle>
            <YouTube
              videoId={module_links[module_num]}
              opts={opts}
              onReady={this._onReady}
              onEnd={this.handleEnd}
            />
          </PlayerStyle>

          <ButtonStyle>
            {this.renderWarning()}
            <Button
              icon="arrow-right"
              intent="primary"
              text="Next"
              onClick={this.handleDone}
              disabled={!(this.state.end || this.props.modules.attempted)}
              fill={false}
              large={true}
            />
          </ButtonStyle>
          <Button
            intent="danger"
            text="Debug Only Skip Video"
            onClick={this.handleEnd}
            disabled={false}
            fill={false}
            large={false}
          />
        </Card>
      </QuestStyle>
    );
  }
  renderPass() {
    return (
      <QuestContainer
        quizNum={this.props.quizNum}
        handleReturn={this.props.handleReturn}
      />
    );
  }
  renderReview() {
    var module_num = this.props.title_name.replace("Module ", "") - 1;
    var opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
        cc_load_policy: 0,
        fs: 0,
        iv_load_policy: 3,
        rel: 0
      }
    };
    return (
      <QuestStyle>
        <Card>
          <Button
            icon="arrow-left"
            intent="primary"
            text="Back"
            onClick={this.props.handleReturnReview}
            disabled={false}
            fill={false}
            large={false}
          />
          <TitleStyle>
            <h1>
              {this.props.title_name}: {this.props.sub_name}
            </h1>
          </TitleStyle>
          <PlayerStyle>
            <YouTube
              videoId={module_links[module_num]}
              opts={opts}
              onReady={this._onReady}
            />
          </PlayerStyle>
        </Card>
      </QuestStyle>
    );
  }
  render() {
    if (this.state.comp_state === 0) {
      return this.renderForce();
    } else {
      return this.renderPass();
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default Example;

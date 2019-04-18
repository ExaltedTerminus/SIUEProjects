import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
const PlayerStyle = styled.div`
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

const VideoComponent = props => {
  var opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 3,
      rel: 0
    }
  };
  return (
    <PlayerStyle>
      <YouTube videoId={module_links[props.quizNum]} opts={opts} />
    </PlayerStyle>
  );
};

export default VideoComponent;

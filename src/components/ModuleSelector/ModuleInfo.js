import React from "react";
import styled from "styled-components";

const ModInfo = styled.div`
  width: 70%;
`;

function ScoreToText(score) {
  if (score === -1) {
    return;
  } else {
    return (
      <React-Fragment>
        <div>{"Best Score: " + (score * 100).toFixed(2) + "%"}</div>
        <div>{"Required Score: 80%"}</div>
      </React-Fragment>
    );
  }
}

const ModuleInfo = props => {
  return (
    <ModInfo>
      <div>{props.title_name}</div>
      <div>{ScoreToText(props.score)}</div>
      <div>{props.sub_name}</div>
    </ModInfo>
  );
};
export default ModuleInfo;

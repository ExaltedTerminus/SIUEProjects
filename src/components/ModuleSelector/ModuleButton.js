import React from "react";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";
import "./button.css";

const ModButtonStyle = styled.div`
  width: 20%;
  height: 100%;
  background-color: grey;
`;
const Center = styled.div`
  text-align: center;
`;

const ModuleButton = props => {
  function determineRender() {
    if (props.isPassed) {
      return renderComplete();
    } else if (props.curr_mod) {
      return renderCurrent();
    } else {
      return renderInaccessible();
    }
  }

  function renderComplete() {
    return (
      <Button
        id={props.title_name.replace("Module ", "")}
        className="bp3-fill "
        intent={"success"}
        onClick={props.onPastModule}
      >
        Complete
      </Button>
    );
  }
  function renderCurrent() {
    return (
      <Button
        id={props.title_name.replace("Module ", "")}
        className="bp3-fill"
        intent={"primary"}
        onClick={props.onCurrModule}
      >
        <span className="no-click">Current Module</span>
      </Button>
    );
  }
  function renderInaccessible() {
    return (
      <Center>
        <Button className="bp3-fill" intent={"danger"} alignText="center">
          Prerequisite Module Incomplete
        </Button>
      </Center>
    );
  }

  return <ModButtonStyle>{determineRender()}</ModButtonStyle>;
};
export default ModuleButton;

import React from "react";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

const ButtonStyle = styled.div`
  @media (max-width: 450px) {
    width: 40%;
  }
  @media (max-width: 260px) {
    width: 50%;
  }
  width: 25%;
  margin: auto;
  justify-content: space-between;
`;

const NextStyle = styled.div`
  @media (max-width: 450px) {
    width: 40%;
  }
  @media (max-width: 260px) {
    width: 50%;
  }
  width: 25%;
  margin: auto;
  float: right;
`;

const PrevStyle = styled.div`
  @media (max-width: 450px) {
    width: 40%;
  }
  @media (max-width: 260px) {
    width: 50%;
  }
  width: 25%;
  margin: auto;
  float: left;
`;

const FullStyle = styled.div`
  margin: auto;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: inline-block;
`;

function QuizNav(props) {
  function renderButtons() {
    if (props.counter !== 0) {
      return (
        <ButtonGroup>
          <PrevStyle>{renderPrevious()}</PrevStyle>
          <NextStyle>{renderNext()}</NextStyle>
        </ButtonGroup>
      );
    } else {
      return (
        <ButtonGroup>
          <ButtonStyle>
            <FullStyle>{renderNext()}</FullStyle>
          </ButtonStyle>
        </ButtonGroup>
      );
    }
  }

  function renderPrevious() {
    return (
      <Button
        icon="arrow-left"
        intent="danger"
        text="Previous"
        onClick={props.onPreviousClick}
        disabled={false}
        fill={true}
      />
    );
  }

  function renderNext() {
    return (
      <Button
        rightIcon="arrow-right"
        intent="success"
        text={props.counter === props.questionTotal - 1 ? "Submit" : "Next"}
        onClick={props.onNextClick}
        disabled={props.buttonMode}
        fill={true}
      />
    );
  }

  return <div>{renderButtons()}</div>;
}
export default QuizNav;

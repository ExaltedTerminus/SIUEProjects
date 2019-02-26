import React from "react";
import styled from "styled-components";
import { Radio, RadioGroup, Checkbox } from "@blueprintjs/core";

const RadioStyle = styled.div`
  text-align: left;
  font-size: 1.2em;
`;

const RadioChkChoices = props => {
  function renderRadioOptions(key) {
    return <Radio id={key.type} label={key.content} value={key.id} />;
  }
  function renderChkOptions(key, index) {
    return (
      <Checkbox
        id={key.type}
        label={key.content}
        value={key.id}
        checked={props.qState[index].selected}
        onChange={props.genericHandler}
      />
    );
  }
  function renderChkRad() {
    if (props.qType === "radio") {
      return renderRadio();
    } else {
      return renderChk();
    }
  }

  function renderRadio() {
    var selectedValue = "";
    for (let i = 0; i < props.qState.length; i++) {
      const currentQ = props.qState[i];
      if (currentQ.selected) {
        selectedValue = currentQ.id;
      }
    }
    return (
      <RadioGroup
        inline={false}
        onChange={props.genericHandler}
        name={props.qID}
        selectedValue={selectedValue}
        disabled={props.buttonsDisabled}
      >
        {props.answerOptions.map(renderRadioOptions)}
      </RadioGroup>
    );
  }

  function renderChk() {
    return <div>{props.answerOptions.map(renderChkOptions)}</div>;
  }

  return <RadioStyle>{renderChkRad()}</RadioStyle>;
};

export default RadioChkChoices;

import React from "react";
import styled from "styled-components";
import { Radio, RadioGroup, Checkbox, Icon } from "@blueprintjs/core";

const RadioStyle = styled.div`
  text-align: left;
  font-size: 1.2em;
`;

const CorrectStyle = styled.div`
  background-color: #dbf0e7;
`;

const WrongStyle = styled.div`
  background-color: #fae1e1;
`;
const CheckStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChoiceResults = props => {
  var selectedValue;
  function getIcon(answer, selected) {
    if (answer) {
      return <Icon icon="tick" intent="success" />;
    } else if (selected) {
      return <Icon icon="cross" intent="danger" />;
    } else {
      return;
    }
  }

  function renderRadioStyle(key) {
    const answer = props.answers.includes(key.id);
    const selected = props.qSelections.includes(key.id);
    if (answer) {
      return (
        <CorrectStyle>{renderRadioGroup(key, answer, selected)}</CorrectStyle>
      );
    } else if (selected) {
      return <WrongStyle>{renderRadioGroup(key, answer, selected)}</WrongStyle>;
    } else {
      return renderRadioGroup(key, answer, selected);
    }
  }
  function renderChkGroup(key, index, answer, selected) {
    return (
      <RadioStyle>
        <Checkbox
          id={key.type}
          label={key.content}
          value={key.id}
          checked={props.qSelections.includes(key.id)}
          disabled={true}
          inline={true}
        />
        {getIcon(answer, selected)}
      </RadioStyle>
    );
  }
  function renderChkStyle(key, index) {
    const answer = props.answers.includes(key.id);
    const selected = props.qSelections.includes(key.id);
    if (answer) {
      return (
        <CorrectStyle>
          {renderChkGroup(key, index, answer, selected)}
        </CorrectStyle>
      );
    } else if (selected) {
      return (
        <WrongStyle>{renderChkGroup(key, index, answer, selected)}</WrongStyle>
      );
    } else {
      return (
        <React-Fragment>
          {renderChkGroup(key, index, answer, selected)}
        </React-Fragment>
      );
    }
  }
  function renderChkRad() {
    if (props.qType === "radio") {
      return <div>{props.answerOptions.map(renderRadioStyle)}</div>;
    } else {
      return renderChk();
    }
  }

  function renderRadioGroup(key, answer, selected) {
    for (let i = 0; i < props.qState.length; i++) {
      const currentQ = props.qState[i];
      if (currentQ.selected) {
        selectedValue = currentQ.id;
      }
    }
    return (
      <RadioStyle>
        <CheckStyle>
          <RadioGroup
            inline={true}
            name={props.qID}
            selectedValue={selected ? key.id : null}
            disabled={true}
          >
            <Radio id={key.id} label={key.content} value={key.id} />
            {getIcon(answer, selected)}
          </RadioGroup>
        </CheckStyle>
      </RadioStyle>
    );
  }

  function renderChk() {
    return props.answerOptions.map(renderChkStyle);
  }

  return renderChkRad();
};

export default ChoiceResults;

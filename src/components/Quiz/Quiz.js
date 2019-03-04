import React from "react";
import QuestionCount from "../Quiz/QuestionCount";
import QuestionTitle from "../Quiz/QuestionTitle";
import RadioChkChoices from "./RadioChkChoices";

const Quiz = props => {
  function renderOptions() {
    if (props.qType === "radio") {
      return renderRadChk("radio");
    } else if (props.qType === "checkbox") {
      return renderRadChk("checkbox");
    } else if (props.qType === "dropdown") {
      return renderDropDown();
    } else if (props.qType === "short") {
      return renderShort();
    }
  }
  function renderRadChk(qType) {
    return (
      <RadioChkChoices
        answerOptions={props.answerOptions}
        selectedValue={props.selectedValue}
        buttonsDisabled={false}
        qID={props.qID}
        qType={props.qType}
        qState={props.qState}
        genericHandler={props.genericHandler}
      />
    );
  }
  function renderDropDown() {
    return <div>TO DO</div>;
  }
  function renderShort() {
    return <div>TO DO</div>;
  }
  return (
    <div key={props.questionId}>
      <QuestionCount counter={props.currentNumQ} total={props.totalNumQ} />
      <QuestionTitle question={props.qTitle} />
      {renderOptions()}
    </div>
  );
};

export default Quiz;

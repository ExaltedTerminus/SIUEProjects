import React from "react";
import ChoiceResults from "./ChoiceResults";
import Correctness from "./Correctness";
import QuestionCount from "./QuestionCount";
import { Card, Icon, Button } from "@blueprintjs/core";
import "./results.css";

const Store = window.require("electron-store");

const Results = props => {
  function renderQuestion(i) {
    return (
      <React-Fragment>
        <Card>
          <Correctness
            qSelections={props.quizSelections[i]}
            answers={props.quizQuestions[i].answer}
          />
          <QuestionCount counter={i + 1} total={props.quizQuestions.length} />

          <h2>{props.quizQuestions[i].question}</h2>
          <ChoiceResults
            answerOptions={props.quizQuestions[i].options}
            selectedValue={props.selectedValue}
            qID={i + 1}
            qType={props.quizQuestions[i].type}
            qState={props.quizStates[i]}
            qSelections={props.quizSelections[i]}
            answers={props.quizQuestions[i].answer}
          />
        </Card>
      </React-Fragment>
    );
  }

  function renderAll() {
    var a = [];
    for (let i = 0; i < props.quizQuestions.length; i++) {
      a.push(renderQuestion(i));
    }
    return a;
  }
  function renderTopSummary() {
    var row = [];
    for (let i = 1; i < props.quizQuestions.length + 1; i++) {
      row.push(<td>{i}</td>);
    }
    return row;
  }
  function renderBottomSummary() {
    var module_num = props.modInfo.title_name.replace("Module ", "");
    const store = new Store();
    var row = [];
    var correctness = store.get("modulecorrect")[module_num - 1];
    for (let i = 0; i < props.quizQuestions.length; i++) {
      if (correctness[i]) {
        row.push(
          <td>
            <Icon icon="tick" intent="success" />
          </td>
        );
      } else {
        row.push(
          <td>
            <Icon icon="cross" intent="danger" />
          </td>
        );
      }
    }
    return row;
  }
  function renderNumCorrect() {
    const store = new Store();
    var module_num = props.modInfo.title_name.replace("Module ", "");
    var correctness = store.get("modulecorrect")[module_num - 1];
    var num_correct = 0;
    for (let i = 0; i < props.quizQuestions.length; i++) {
      if (correctness[i]) {
        num_correct += 1;
      }
    }
    return num_correct;
  }
  function renderSummary() {
    return (
      <table id="results">
        <tbody>
          <tr>
            {renderTopSummary()}
            <td>Total</td>
          </tr>
          <tr>
            {renderBottomSummary()}
            <td>
              {renderNumCorrect()}/{props.quizQuestions.length}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  function renderBackButton() {
    return (
      <Button
        icon="arrow-left"
        intent="primary"
        text="Back"
        onClick={props.handleReturn}
        disabled={false}
        fill={false}
      />
    );
  }
  return (
    <div>
      {renderBackButton()}
      <div className="resultside">
        <h1>
          {props.modInfo.title_name}: {props.modInfo.sub_name}
        </h1>
        {renderSummary()}
      </div>
      {renderAll()}
    </div>
  );
};

export default Results;

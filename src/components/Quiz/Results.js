import React from "react";
import ChoiceResults from "./ChoiceResults";
import Correctness from "./Correctness";
import QuestionCount from "./QuestionCount";
import { Card, Icon } from "@blueprintjs/core";
import "./results.css";

const Results = props => {
  function renderQuestion(i) {
    console.log(i);
    console.log(props.quizSelections);
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
  function renderSummary() {
    return (
      <table id="results">
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>Total</td>
        </tr>
        <tr>
          <td>
            <Icon icon="tick" intent="success" />
          </td>
          <td>
            <Icon icon="tick" intent="success" />
          </td>
          <td>
            <Icon icon="tick" intent="success" />
          </td>
          <td>
            <Icon icon="tick" intent="success" />
          </td>
          <td>
            <Icon icon="cross" intent="danger" />
          </td>
          <td>7/{props.quizQuestions.length}</td>
        </tr>
      </table>
    );
  }
  console.log(props.quizQuestions);
  return (
    <div>
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

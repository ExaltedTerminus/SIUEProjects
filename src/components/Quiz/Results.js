import React from "react";
import ChoiceResults from "./ChoiceResults";
import Correctness from "./Correctness";
import QuestionCount from "./QuestionCount";
import { Card } from "@blueprintjs/core";

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

  return <div>{renderAll()}</div>;
};

export default Results;

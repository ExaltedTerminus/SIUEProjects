import React, { Component } from "react";
import styled from "styled-components";
import quizQuestions from "../../api/quizQuestions";
import Quiz from "../../components/Quiz/Quiz";
import Results from "./Results";
import QuizNav from "../Quiz/QuizNav";

import { Card } from "@blueprintjs/core";

const QuestStyle = styled.div`
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
  margin: auto;
  padding-top: 2%;
`;

class QuestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      questionTitle: "",
      questionOptions: [],
      questionAnswer: "",
      complete: false,
      results: [],
      buttonDisabled: true,
      selections: [],
      questionType: "",
      questionState: []
    };

    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePreviousButton = this.handlePreviousButton.bind(this);
    this.handleGenericSelected = this.handleGenericSelected.bind(this);
  }

  componentWillMount() {
    const optionsObjArr = quizQuestions[0].options;

    const questionState = this.initQuestionState(optionsObjArr);
    this.setState({
      questionTitle: quizQuestions[0].question,
      questionOptions: optionsObjArr,
      questionAnswer: quizQuestions[0].answer,
      questionType: quizQuestions[0].type,
      questionState: questionState
    });
  }

  handleNextButton(event) {
    if (this.state.questionId < quizQuestions.length) {
      this.setNextQuestion();
    } else {
      var selections = this.deepCopySelections(this.state.selections);
      selections.splice(
        this.state.counter,
        0,
        this.deepCopyState(this.state.questionState)
      );
      this.setState({
        selections: selections,
        complete: true
      });
    }
  }

  handleGenericSelected(event) {
    const questionState = this.deepCopyState(this.state.questionState);
    var buttonDisabled = true;
    for (let i = 0; i < questionState.length; i++) {
      if (this.state.questionType === "radio") {
        questionState[i].selected = false;
      }
      if (this.state.questionState[i].id === event.currentTarget.value) {
        questionState[i].selected = !questionState[i].selected;
      }
      if (questionState[i].selected === true) {
        buttonDisabled = false;
      }
    }
    this.setState({
      questionState: questionState,
      buttonDisabled: buttonDisabled
    });
  }

  handlePreviousButton() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    const questionType = quizQuestions[counter].type;
    const questionOptions = quizQuestions[counter].options;
    const questionState = this.deepCopyState(this.state.selections[counter]);
    this.setState({
      counter: counter,
      questionId: questionId,
      questionTitle: quizQuestions[counter].question,
      questionOptions: questionOptions,
      questionAnswer: quizQuestions[counter.answer],
      questionType: questionType,
      buttonDisabled: false,
      questionState: questionState
    });
  }
  initQuestionState(optionsObjArr) {
    var questionState = [];
    for (let i = 0; i < optionsObjArr.length; i++) {
      questionState = questionState.concat({
        id: optionsObjArr[i].id,
        selected: false
      });
    }
    return questionState;
  }

  setNextQuestion() {
    //Check for overwrite scenario due to previous button
    var counter = this.state.counter;
    var selections = this.deepCopySelections(this.state.selections);
    if (typeof selections[counter] != "undefined") {
      selections.splice(counter, 1);
    }
    //Record current Q's state
    selections.splice(counter, 0, this.deepCopyState(this.state.questionState));
    //Setup next question
    counter += 1;
    //Check if it's already been answered once and setup values if so:
    var questionState;
    var buttonDisabled;
    if (typeof selections[counter] != "undefined") {
      questionState = this.deepCopyState(selections[counter]);
      buttonDisabled = false;
    } else {
      questionState = this.initQuestionState(quizQuestions[counter].options);
      buttonDisabled = true;
    }
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      questionTitle: quizQuestions[counter].question,
      questionOptions: quizQuestions[counter].options,
      questionAnswer: quizQuestions[counter].answer,
      questionType: quizQuestions[counter].type,
      questionState: questionState,
      buttonDisabled: buttonDisabled,
      selections: selections
    });
  }

  renderQuiz() {
    return (
      <React-Fragment>
        <Quiz
          answerOptions={this.state.questionOptions}
          currentNumQ={this.state.questionId}
          totalNumQ={quizQuestions.length}
          qTitle={this.state.questionTitle}
          qID={this.state.questionId}
          qType={this.state.questionType}
          genericHandler={this.handleGenericSelected}
          qState={this.state.questionState}
        />
        <hr />
        <QuizNav
          onNextClick={this.handleNextButton}
          onPreviousClick={this.handlePreviousButton}
          buttonMode={this.state.buttonDisabled}
          counter={this.state.counter}
          questionTotal={quizQuestions.length}
        />
      </React-Fragment>
    );
  }
  deepCopySelections(selections) {
    var newObj = [];
    for (let i = 0; i < selections.length; i++) {
      newObj.push(this.deepCopyState(selections[i]));
    }
    return newObj;
  }
  deepCopyState(state) {
    var newObj = [];
    for (let i = 0; i < state.length; i++) {
      const obj = this.copyVal(state[i]);
      newObj.push(obj);
    }
    return newObj;
  }
  deepRemoveSelection(selections, index) {
    var newObj = [];
    for (let i = 0; i < selections.length; i++) {
      if (i !== index) {
        const obj = this.copyVal(selections[i]);
        newObj.push(obj);
      }
    }
    return newObj;
  }
  copyVal(obj) {
    return { id: obj.id, selected: obj.selected };
  }

  tempfunc(b) {
    return;
    var str = "";
    for (let i = 0; i < b.length; i++) {
      str = str + "{" + b[i].id + ", " + b[i].selected + "}";
      if (i !== b.length - 1) {
        str += ", ";
      }
    }
    return str === "" ? "Error" : str;
  }

  temp2func() {
    return;
    var z = this.state.selections;
    var str = z.map(function(x) {
      return <div>{this.tempfunc(x)}</div>;
    }, this);
    if (z.length === 0) {
      str = "empty";
    }
    return <div>{str}</div>;
  }
  renderResult() {
    var selectionsArr = [];
    this.state.selections.forEach(function(state) {
      var stateSel = [];
      state.forEach(function(obj) {
        if (obj.selected) {
          stateSel.push(obj.id);
        }
      });
      selectionsArr.push(stateSel);
    });
    return (
      <Results
        quizStates={this.state.selections}
        quizQuestions={quizQuestions}
        quizSelections={selectionsArr}
      />
    );
  }

  render() {
    return (
      <QuestStyle>
        <Card>
          {this.state.complete ? this.renderResult() : this.renderQuiz()}
          {this.tempfunc(this.state.questionState)}

          {this.temp2func()}
        </Card>
      </QuestStyle>
    );
  }
}

export default QuestContainer;

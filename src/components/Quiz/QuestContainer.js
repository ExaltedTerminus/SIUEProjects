import React, { Component } from "react";
import styled from "styled-components";
import getQuiz from "../../api/quizQuestions";
import Quiz from "../../components/Quiz/Quiz";
import Results from "./Results";
import QuizNav from "../Quiz/QuizNav";
import { Card } from "@blueprintjs/core";
const Store = window.require("electron-store");
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
      questionState: [],
      quizQuestions: [],
      quizNum: 0
    };

    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePreviousButton = this.handlePreviousButton.bind(this);
    this.handleGenericSelected = this.handleGenericSelected.bind(this);
  }

  componentWillMount() {
    const store = new Store();

    var quizQuestions = getQuiz(this.props.quizNum - 1);
    const optionsObjArr = quizQuestions[0].options;

    const questionState = this.initQuestionState(optionsObjArr);
    this.setState({
      questionTitle: quizQuestions[0].question,
      questionOptions: optionsObjArr,
      questionAnswer: quizQuestions[0].answer,
      questionType: quizQuestions[0].type,
      questionState: questionState,
      quizQuestions: quizQuestions,
      quizNum: this.props.quizNum
    });
  }

  handleNextButton(event) {
    if (this.state.questionId < this.state.quizQuestions.length) {
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
    const questionType = this.state.quizQuestions[counter].type;
    const questionOptions = this.state.quizQuestions[counter].options;
    const questionState = this.deepCopyState(this.state.selections[counter]);
    this.setState({
      counter: counter,
      questionId: questionId,
      questionTitle: this.state.quizQuestions[counter].question,
      questionOptions: questionOptions,
      questionAnswer: this.state.quizQuestions[counter.answer],
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
      questionState = this.initQuestionState(
        this.state.quizQuestions[counter].options
      );
      buttonDisabled = true;
    }
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      questionTitle: this.state.quizQuestions[counter].question,
      questionOptions: this.state.quizQuestions[counter].options,
      questionAnswer: this.state.quizQuestions[counter].answer,
      questionType: this.state.quizQuestions[counter].type,
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
          totalNumQ={this.state.quizQuestions.length}
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
          questionTotal={this.state.quizQuestions.length}
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
    /*
    var str = "";
    for (let i = 0; i < b.length; i++) {
      str = str + "{" + b[i].id + ", " + b[i].selected + "}";
      if (i !== b.length - 1) {
        str += ", ";
      }
    }
    return str === "" ? "Error" : str;
    */
  }

  temp2func() {
    return;
    /*
    var z = this.state.selections;
    var str = z.map(function(x) {
      return <div>{this.tempfunc(x)}</div>;
    }, this);
    if (z.length === 0) {
      str = "empty";
    }
    return <div>{str}</div>;
    */
  }
  renderResult() {
    const store = new Store();
    var selectionsArr = [];
    //console.log(this.state.selections);
    this.state.selections.forEach(function(state) {
      var stateSel = [];
      state.forEach(function(obj) {
        if (obj.selected) {
          stateSel.push(obj.id);
        }
      });
      selectionsArr.push(stateSel);
    });
    this.saveQuizResults(selectionsArr);
    let modInfo = store.get("moduleprog")[this.state.quizNum - 1];
    return (
      <Results
        quizStates={this.state.selections}
        quizQuestions={this.state.quizQuestions}
        quizSelections={selectionsArr}
        modInfo={modInfo}
        handleReturn={this.props.handleReturn}
      />
    );
  }
  getScore(selectionsArr) {
    const store = new Store();
    var correct = true;
    var num_correct = 0;
    var total_q = 0;
    var selected_correct = [];
    //iterate through each question
    for (let i = 0; i < this.state.quizQuestions.length; i++) {
      correct = true;
      //if number of answers (ex: checkboxes) is diff, then it's wrong
      if (
        this.state.quizQuestions[i].answer.length !== selectionsArr[i].length
      ) {
        correct = false;
      } else {
        //for each selection, if it's NOT in the answer, then the question is wrong.
        selectionsArr[i].forEach(function(selection) {
          if (!this.state.quizQuestions[i].answer.includes(selection)) {
            correct = false;
          }
        }, this);
      }
      //if the flag was never set to false, then they got the question right
      if (correct) {
        num_correct += 1;
        selected_correct.push(true);
      } else {
        selected_correct.push(false);
      }
      total_q += 1;
    }
    console.log(selected_correct);
    var modulecorrect;
    if (store.get("modulecorrect") === undefined) {
      console.log("undefined");
      modulecorrect = [];
    } else {
      console.log("got it");
      modulecorrect = store.get("modulecorrect");
    }
    console.log(modulecorrect);
    modulecorrect.push(selected_correct);
    console.log(modulecorrect);
    store.set("modulecorrect", modulecorrect);
    return num_correct / total_q;
  }

  saveQuizResults(selectionsArr) {
    //get what they scored on quiz
    const new_score = this.getScore(selectionsArr);
    const store = new Store();
    var moduleprog = store.get("moduleprog");

    //if new score is better than current score, record score and what they answered.
    if (moduleprog[this.state.quizNum - 1].score < new_score) {
      moduleprog[this.state.quizNum - 1].score = new_score;
      store.set("moduleprog", moduleprog);
      //store state
      var quizStates;
      var quizSelect;

      if (store.get("quizStates") === undefined) {
        //first quiz
        quizStates = [];
      } else {
        //adding quiz
        quizStates = store.get("quizStates");
      }
      if (store.get("quizSelect") === undefined) {
        //first quiz
        quizSelect = [];
      } else {
        //adding quiz
        quizSelect = store.get("quizSelect");
      }
      quizStates.push(this.state.selections);
      quizSelect.push(selectionsArr);
      store.set("quizStates", quizStates);
      store.set("quizSelect", quizSelect);
    }
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

import React, { Component } from "react";
import quizModules from "../../api/quizModules";
import quizQuestions from "../../api/quizQuestions";
import ModuleList from "./ModuleList.js";
import Results from "../Quiz/Results";
import QuestContainer from "../Quiz/QuestContainer";
const Store = window.require("electron-store");

class ModuleSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [],
      comp_state: 0,
      quizNum: 0
    };
    this.handleCompletedModule = this.handleCompletedModule.bind(this);
    this.handleCurrentModule = this.handleCurrentModule.bind(this);
  }
  handleCompletedModule(event) {
    var quizNum = event.target.id;
    this.setState({
      comp_state: 2,
      quizNum: quizNum
    });
  }
  handleCurrentModule(event) {
    var quizNum = event.target.id;
    this.setState({
      comp_state: 1,
      quizNum: quizNum
    });
  }

  componentWillMount() {
    const store = new Store();
    if (store.get("moduleprog") === undefined) {
      var quizModCopy = this.copyQuizMod();
      store.set("moduleprog", quizModCopy);
    } else {
      var quizModCopy = store.get("moduleprog");
    }
    quizModCopy = this.module_fixup(quizModCopy);
    this.setState({
      modules: quizModCopy
    });
  }

  module_fixup(quizModCopy) {
    const store = new Store();
    for (let i = 0; i < quizModCopy.length; i++) {
      let mod = quizModCopy[i];
      if (mod.curr_mod && mod.score > 0.8) {
        mod.isPassed = true;
        mod.curr_mod = false;
        if (i + 1 != 10) {
          let next_mod = quizModCopy[i + 1];
          next_mod.prereq_done = true;
          next_mod.curr_mod = true;
          quizModCopy[i + 1] = next_mod;
        }
        quizModCopy[i] = mod;
      }
    }
    return quizModCopy;
  }
  copyQuizMod() {
    var copy = [];
    for (let i = 0; i < quizModules.length; i++) {
      const obj = this.copyModuleAttrb(quizModules[i]);
      copy.push(obj);
    }
    return copy;
  }
  copyModuleAttrb(module) {
    return {
      title_name: module.title_name,
      sub_name: module.sub_name,
      score: module.score,
      prereq_done: module.prereq_done,
      curr_mod: module.curr_mod,
      isPassed: module.isPassed
    };
  }
  renderMod() {
    return (
      <ModuleList
        modules={this.state.modules}
        onPastModule={this.handleCompletedModule}
        onCurrModule={this.handleCurrentModule}
      />
    );
  }
  renderQuiz() {
    return <QuestContainer quizNum={this.state.quizNum} />;
  }
  renderResults() {
    const store = new Store();
    let quizState = store.get("quizStates")[this.state.quizNum];
    let quizSelect = store.get("quizSelect")[this.state.quizNum];
    return (
      <Results
        quizStates={quizState}
        quizQuestions={quizQuestions}
        quizSelections={quizSelect}
      />
    );
  }
  render() {
    if (this.state.comp_state == 1) {
      return this.renderQuiz();
    } else if (this.state.comp_state == 2) {
      return this.renderResults();
    } else {
      return this.renderMod();
    }
  }
}

export default ModuleSelector;
import React from "react";
const Store = window.require("electron-store");

const ClearStore = props => {
  const store = new Store();
  store.delete("currmod");
  store.delete("moduleprog");
  store.delete("quizStates");
  store.delete("quizSelect");
  store.delete("modulecorrect");

  return <h1>Store Cleared</h1>;
};
export default ClearStore;

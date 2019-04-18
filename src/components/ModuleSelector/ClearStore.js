import React from "react";
import { Button, Card } from "@blueprintjs/core";
import styled from "styled-components";
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

const ClearStore = props => {
  function clear() {
    const store = new Store();
    console.log(store.get("currmod"));
    console.log(store.get("moduleprog"));
    console.log(store.get("quizStates"));
    console.log(store.get("quizSelect"));
    console.log(store.get("modulecorrect"));
    store.delete("currmod");
    store.delete("moduleprog");
    store.delete("quizStates");
    store.delete("quizSelect");
    store.delete("modulecorrect");
    window.alert("Store cleared");
  }
  return (
    <QuestStyle>
      <Card>
        <Button
          intent="danger"
          text={"Clear Store"}
          onClick={() => clear()}
          disabled={false}
          fill={false}
        />
      </Card>
    </QuestStyle>
  );
};
export default ClearStore;

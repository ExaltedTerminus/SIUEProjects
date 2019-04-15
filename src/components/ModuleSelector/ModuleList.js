import React from "react";
import { Card } from "@blueprintjs/core";
import Module from "./Module";
import styled from "styled-components";

const ModuleListStyle = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
  background-color: gray;
  padding: 10px;
`;

const ModuleStyle = styled.div`
  margin-bottom: 10px;
`;

const ModuleList = props => {
  function renderModule(key) {
    return (
      <ModuleStyle>
        <Card>
          <Module
            title_name={key.title_name}
            sub_name={key.sub_name}
            score={key.score}
            prereq_done={key.prereq_done}
            curr_mod={key.curr_mod}
            isPassed={key.isPassed}
            onPastModule={props.onPastModule}
            onCurrModule={props.onCurrModule}
          />
        </Card>
      </ModuleStyle>
    );
  }
  return <ModuleListStyle>{props.modules.map(renderModule)}</ModuleListStyle>;
};
export default ModuleList;

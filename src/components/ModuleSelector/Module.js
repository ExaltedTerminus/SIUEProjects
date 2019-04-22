import React from "react";
import ModuleInfo from "./ModuleInfo";
import ModuleButton from "./ModuleButton";
import styled from "styled-components";

const ModuleSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Module = props => {
  return (
    <ModuleSide>
      <ModuleInfo
        title_name={props.title_name}
        score={props.score}
        sub_name={props.sub_name}
      />
      <ModuleButton
        title_name={props.title_name}
        prereq_done={props.prereq_done}
        curr_mod={props.curr_mod}
        isPassed={props.isPassed}
        onPastModule={props.onPastModule}
        onCurrModule={props.onCurrModule}
      />
    </ModuleSide>
  );
};
export default Module;

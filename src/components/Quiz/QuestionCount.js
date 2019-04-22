import React from "react";
import styled from "styled-components";

const CountStyle = styled.div`
  text-align: left;
  font-size: 1em;
`;

function QuestionCount(props) {
  return (
    <CountStyle>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </CountStyle>
  );
}

export default QuestionCount;

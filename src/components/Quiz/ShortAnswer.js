import React from "react";
import styled from "styled-components";
import { Radio, RadioGroup, Checkbox } from "@blueprintjs/core";

const RadioStyle = styled.div`
  text-align: left;
  font-size: 1.2em;
`;

const ShortAnswer = props => {
  return (
    <div class="bp3-input-group .modifier">
      <input
        type="text"
        class="bp3-input bp3-round bp3-intent-primary"
        placeholder="Input..."
      />
    </div>
  );
};

export default ShortAnswer;

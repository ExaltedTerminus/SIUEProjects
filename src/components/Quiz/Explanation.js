import React from "react";
import { Callout } from "@blueprintjs/core";

const Explanation = props => {
  function paragraphs(key) {
    return <p>{key}</p>;
  }
  var para = props.exp.split("\n");
  if (props.exp !== "") {
    return (
      <Callout icon="info-sign" title="Explanation">
        {para.map(paragraphs)}
      </Callout>
    );
  } else {
    return null;
  }
};

export default Explanation;

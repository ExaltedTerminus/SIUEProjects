import React from "react";
import { Callout } from "@blueprintjs/core";

const Correctness = props => {
  var title;
  var intent;
  var icon;
  var correct = true;
  if (props.qSelections.length !== props.answers.length) {
    correct = false;
  } else {
    props.qSelections.forEach(function(selection) {
      if (!props.answers.includes(selection)) {
        correct = false;
      }
    });
  }
  if (correct) {
    title = "Correct";
    intent = "Success";
    icon = "tick";
  } else {
    title = "Incorrect";
    intent = "Danger";
    icon = "cross";
  }
  return <Callout title={title} intent={intent} icon={icon} />;
};

export default Correctness;

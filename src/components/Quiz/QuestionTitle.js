import React from "react";
import img_loc from "../../images/img.PNG";

function QuestionTitle(props) {
  function multi_title(key) {
    if (key.includes("<IMG>")) {
      key.replace("<IMG>", "");
      return <img src={img_loc} alt="question" />;
    }
    return <h2>{key}</h2>;
  }
  if (props.question.split("\n").length === 1) {
    return <h1>{props.question}</h1>;
  } else {
    let multi = props.question.split("\n");
    return <div>{multi.map(multi_title)}</div>;
  }
}

export default QuestionTitle;

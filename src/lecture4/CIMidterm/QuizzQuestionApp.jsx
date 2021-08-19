import React, { Component } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

class QuizzQuestionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzData: [
        {
          question: "Which language runs in a web browser?",
          a: "Java",
          b: "C",
          c: "Python",
          d: "JavaScript",
          correct: "d",
          isDisplayForm: true,
        },
        {
          question: "What does CSS stand for?",
          a: "Central Style Sheets",
          b: "Cascading Style Sheets",
          c: "Cascading Simple Sheets",
          d: "Cars SUVs Sailboats",
          correct: "b",
          isDisplayForm: false,
        },
        {
          question: "What does HTML stand for?",
          a: "Hypertext Markup Language",
          b: "Hypertext Markdown Language",
          c: "Hyperloop Machine Language",
          d: "Helicopters Terminals Motorboats Lamborginis",
          correct: "a",
          isDisplayForm: false,
        },
        {
          question: "What year was JavaScript launched?",
          a: "1996",
          b: "1995",
          c: "1994",
          d: "none of the above",
          correct: "b",
          isDisplayForm: false,
        },
      ],
      isDisplayForm: true,
    };
  }
  onShowUpdateForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  render() {
    var { isDisplayForm } = this.state;
    var eleQuestion1 = isDisplayForm ? <Question1 /> : "";
    var eleQuestion2 = isDisplayForm ? <Question2 /> : "";
    var eleQuestion3 = isDisplayForm ? <Question3 /> : "";
    var eleQuestion4 = isDisplayForm ? <Question4 /> : "";
    return (
      <div className="container ">
        {eleQuestion1}
        {eleQuestion2}
        {eleQuestion3}
        {eleQuestion4}
      </div>
    );
  }
}

export default QuizzQuestionApp;

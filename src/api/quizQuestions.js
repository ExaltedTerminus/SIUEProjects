var quizQuestions = [
  [
    {
      question:
        "The fact that invested cash earns income over time is called the time value of money.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "j1"
        },
        {
          content: "FALSE",
          id: "j2"
        }
      ],
      answer: ["j1"],
      explain: ""
    },
    {
      question: "Which of the following describes the time value of money?",
      type: "radio",
      options: [
        {
          content:
            "The fact that invested cash may not earn interest over time is called the time value of money.",
          id: "q1"
        },
        {
          content:
            "A dollar received today is worth more than a dollar to be received in the future.",
          id: "q2"
        }
      ],
      answer: ["q2"],
      explain: ""
    },
    {
      question:
        "The only difference between the present value and future value of a lump sum is the amount of interest that is earned in the intervening time span.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "a1"
        },
        {
          content: "FALSE",
          id: "a2"
        }
      ],
      answer: ["a1"],
      explain: ""
    },
    {
      question: "Which of the following most accurately describes an annuity?",
      type: "radio",
      options: [
        {
          content:
            "an investment which produces increasing cash flows over time",
          id: "b1"
        },
        {
          content:
            "a stream of equal cash payments made at equal time intervals",
          id: "b2"
        }
      ],
      answer: ["b2"],
      explain: ""
    },
    {
      question:
        "An annuity is a series of unequal payments over equal intervals.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "c1"
        },
        {
          content: "FALSE",
          id: "c2"
        }
      ],
      answer: ["c2"],
      explain: ""
    },
    {
      question:
        "The process for calculating present values is often called discounting future cash flows",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "z1"
        },
        {
          content: "FALSE",
          id: "z2"
        }
      ],
      answer: ["z1"],
      explain: ""
    },
    {
      question:
        "An annuity is a series of unequal payments over equal intervals.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "x1"
        },
        {
          content: "FALSE",
          id: "x2"
        }
      ],
      answer: ["x1"],
      explain: ""
    }
  ],
  [
    {
      question:
        "All else being equal, the shorter the investment period, the higher the total amount of interest earned.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "j1"
        },
        {
          content: "FALSE",
          id: "j2"
        }
      ],
      answer: ["j2"],
      explain: ""
    },
    {
      question:
        "Compound interest means that interest is calculated only on the principal amount.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "z1"
        },
        {
          content: "FALSE",
          id: "z2"
        }
      ],
      answer: ["z2"],
      explain: ""
    },
    {
      question:
        "Compound interest assumes that all interest earned will remain invested and earn additional interest at the same interest rate.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "x1"
        },
        {
          content: "FALSE",
          id: "x2"
        }
      ],
      answer: ["x1"],
      explain: ""
    },
    {
      question:
        "An investment today of $8,424 at 6% will yield total payments of $10,000 over five years.  The reason for this increase is that the interest is being earned on principal that is left invested each year.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "y1"
        },
        {
          content: "FALSE",
          id: "y2"
        }
      ],
      answer: ["y1"],
      explain: "stuff"
    }
  ]
];
function getQuiz(x) {
  return quizQuestions[x];
}

export default getQuiz;

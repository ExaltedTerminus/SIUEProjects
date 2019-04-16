var quizQuestions = [
  //module 1
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
  //module 2
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
  ],
  //module 3
  [
    {
      question:
        "When computing the present value, the interest rate will vary depending on the amount of risk. Riskier investments, such as stock investments, command higher interest rates.",
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
      question:
        "When computing the present value, the interest rate will vary depending on the amount of risk. Safer investments, such as FDIC-insured bank deposits, yield lower interest rates.",
      type: "radio",
      options: [
        {
          content: "TRUE",
          id: "b1"
        },
        {
          content: "FALSE",
          id: "b2"
        }
      ],
      answer: ["b1"],
      explain: ""
    }
  ],
  //module 4
  [
    {
      question:
        "Today, Thomas deposited $100,000 in a three-year, 12% CD that compounds quarterly. What is the maturity value of the CD?",
      type: "radio",
      options: [
        {
          content: "$109,270.",
          id: "a1"
        },
        {
          content: "$119,410.",
          id: "a2"
        },
        {
          content: "$142,576.",
          id: "a3"
        },
        {
          content: "$309,090.",
          id: "a4"
        }
      ],
      answer: ["a3"],
      explain: ""
    },
    {
      question:
        "At the end of each quarter, Patti deposits $500 into an account that pays 12% interest compounded quarterly. How much will Patti have in the account in three years?",
      type: "radio",
      options: [
        {
          content: "$7,096.",
          id: "b1"
        },
        {
          content: "$7,213.",
          id: "b2"
        },
        {
          content: "$7,129.",
          id: "b3"
        },
        {
          content: "$8,880",
          id: "b4"
        }
      ],
      answer: ["b1"],
      explain: ""
    }
  ][
    //module 5
    //5:1
    ({
      question:
        "The following formula is used to compute the present value of a lump sum: Future value = Present value × PV factor for i = X%, n = Y periods",
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
      answer: ["a2"],
      explain: ""
    },
    //5:2
    {
      question:
        "You want to sell your share of an investment to Howard for $50,000 in three years. If money is worth 6% compounded semiannually, what would you accept today?",
      type: "radio",
      options: [
        {
          content: "$8,375.",
          id: "b1"
        },
        {
          content: "$41,874.",
          id: "b2"
        },
        {
          content: "$11,941.",
          id: "b3"
        },
        {
          content: "$41,000.",
          id: "b4"
        }
      ],
      answer: ["b2"],
      explain: ""
    })
    //5:3
    //5:4
    //5:5
    //5:6
    //5:7
    //5:8
    //5:9
  ]
  //module 6
  //module 7
  //module 8
  //module 9
  //module 10
];
function getQuiz(x) {
  return quizQuestions[x];
}

export default getQuiz;

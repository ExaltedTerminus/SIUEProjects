var quizQuestions = [
  //module 1
  [
    //1:1
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
    //1:2
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
    //1:3
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
    //1:4
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
    //1:5
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
    //1:6
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
    //1:7
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
    //2:1
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
    //2:2
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
    //2:3
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
    //2:4
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
      explain:
        "PV = Payment × PVA factor (i = 6%, n = 5)\n = $2,000 × 4.212\n = $8,424"
    }
  ],
  //module 3
  [
    {
      //3:1
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
    //3:2
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
    //4:1
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
      explain:
        "Explanation:  FV = $100,000 × 1.42576* = $142,576\n*FV of $1: n = 12; i = 3%"
    },
    //4:2
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
      explain: "FVA = $500 × 14.1920* = $7,096\n*FVA of $1: n = 12; i = 3%"
    }
  ],
  //module 5
  [
    //5:1
    {
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
      explain: "Present value = Future value × PV factor for i = X%, n =Y"
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
      explain: "PV = $50,000 × 0.83748* = $41,874"
    },
    //5:3
    {
      question:
        "Tom wants to invest money in a 6% CD account that compounds semiannuall. Tom would like the account to have a balance of $100,000 five years from now. How much must Tom deposit to accomplish his goal?",
      type: "radio",
      options: [
        {
          content: "$81,375.",
          id: "c1"
        },
        {
          content: "$74,682.",
          id: "c2"
        },
        {
          content: "$73,102.",
          id: "c3"
        },
        {
          content: "$74,409",
          id: "c4"
        }
      ],
      answer: ["c4"],
      explain: "PV = $100,000 × 0.74409* = $74,409\n*PV of $1: n = 10; i = 3%"
    },
    //5:4
    {
      question:
        "Angelina wants to invest money in a 6% CD account that compounds semiannually. Angelina would like the account to have a balance of $50,000 four years from now. How much must Angelina deposit to accomplish her goal?",
      type: "radio",
      options: [
        {
          content: "$38,251",
          id: "d1"
        },
        {
          content: "$39,471",
          id: "d2"
        },
        {
          content: "$41,689",
          id: "d3"
        },
        {
          content: "$35,556",
          id: "d4"
        }
      ],
      answer: ["d2"],
      explain: "*PV of $1: n = 8; i = 3%"
    },
    //5:5
    {
      question:
        "Bill wants to give Hillary a $500,000 gift in seven years. If money is worth 6% compounded semiannually, what is Hillary's gift worth today?",
      type: "radio",
      options: [
        {
          content: "$330,560",
          id: "e1"
        },
        {
          content: "$311,890",
          id: "e2"
        },
        {
          content: "$299,486",
          id: "e3"
        },
        {
          content: "$300,582",
          id: "e4"
        }
      ],
      answer: ["e1"],
      explain: "*PV of $1: n = 14; i = 3%"
    },
    //5:6
    {
      question:
        "Monica wants to sell her share of an investment to Barney for $50,000 in three years. If money is worth 6% compounded semiannually, what should Monica accept today?",
      type: "radio",
      options: [
        {
          content: "$41,872",
          id: "f1"
        },
        {
          content: "$45,123",
          id: "f2"
        },
        {
          content: "$41,874",
          id: "f3"
        },
        {
          content: "$43,228",
          id: "f4"
        }
      ],
      answer: ["f3"],
      explain: "*PV of $1: n = 6; i = 3%"
    },
    //5:7
    {
      question:
        "You want to invest money in a 6% CD account that compounds semiannually. You would like the account to have a balance of $50,000 five years from now. How much must you deposit to accomplish this goal?",
      type: "radio",
      options: [
        {
          content: "$35,069.",
          id: "g1"
        },
        {
          content: "$43,131.",
          id: "g2"
        },
        {
          content: "$37,205.",
          id: "g3"
        },
        {
          content: "$35,000.",
          id: "g4"
        }
      ],
      answer: ["g3"],
      explain: "PV = $50,000 × 0.74409* = $37,205\n*PV of $1: n = 10; i = 3%"
    },
    //5:8
    {
      question:
        "Bill wants to give you a $500,000 gift in seven years. If money is worth 6% compounded semiannually, what is your gift worth today?",
      type: "radio",
      options: [
        {
          content: "$66,110.",
          id: "h1"
        },
        {
          content: "$81,309.",
          id: "h2"
        },
        {
          content: "$406,545.",
          id: "h3"
        },
        {
          content: "$330,560.",
          id: "h4"
        }
      ],
      answer: ["h4"],
      explain:
        "Explanation:  PV = $500,000 × 0.66112* = $330,560\n*PV of $1: n = 14; i = 3%"
    },
    //5:9
    {
      question:
        "Dave Smith has just won the state lottery and has the following three payout options for after-tax prize money:\n1. $114,000 per year at the end of each of the next six years\n2. $238,000 (lump sum) now\n3. $502,000 (lump sum) six years from now\nThe annual discount rate is 9%. Compute the present value of the third option. \nWhat is the Present value of the lottery receipt under the third option?\n<IMG>",
      type: "radio",
      options: [
        {
          content: "$287,642",
          id: "j1"
        },
        {
          content: "$299,192",
          id: "j2"
        }
      ],
      answer: ["j2"],
      explain: ""
    }
  ],
  //module 6
  [
    //6:1
    {
      question:
        "Jimmy Butler has $255,906 accumulated in a 401K plan. The fund is earning a low, but safe, 3% per year. The withdrawals will take place at the end of each year starting a year from now. \nHow soon will the fund be exhausted if Jimmy withdraws $30,000 each year?",
      type: "radio",
      options: [
        {
          content: "10 years",
          id: "a1"
        },
        {
          content: "9 years",
          id: "a2"
        },
        {
          content: "8 years",
          id: "a3"
        }
      ],
      answer: ["a1"],
      explain:
        "$255,906 ÷ $30,000 = 8.5302\nFor PVA of $1 factor of 8.5302 and i of 3%, n = 10"
    },
    //6:2
    {
      question:
        "Debbie has $368,882 accumulated in a 401K plan. The fund is earning a low, but safe, 3% per year. The withdrawals will take place annually starting today. How soon will the fund be exhausted if Debbie withdraws $30,000 each year?",
      type: "radio",
      options: [
        {
          content: "15 years",
          id: "b1"
        },
        {
          content: "16 years",
          id: "b2"
        },
        {
          content: "14 years",
          id: "b3"
        },
        {
          content: "12.3 years",
          id: "b4"
        }
      ],
      answer: ["b1"],
      explain:
        "Explanation:  $368,882 ÷ $30,000 = 12.29607\nFor PVAD of $1 factor of 12.29607 and i of 3%, n = 15"
    },
    //6:3
    {
      question:
        "At the end of the next four years, an investment is expected to generate net cash flows of $8,000, $12,000, $10,000, and $15,000, respectively. What are the (rounded) cash flows worth today if the interest rate is 3%?",
      type: "radio",
      options: [
        {
          content: "$40,298.",
          id: "c1"
        },
        {
          content: "$41,556.",
          id: "c2"
        },
        {
          content: "$42,682.",
          id: "c3"
        },
        {
          content: "$43,998.",
          id: "c4"
        }
      ],
      answer: ["c2"],
      explain:
        " ($8,000 × 0.97087) + ($12,000 × 0.94260) + ($10,000 × 0.91514) + ($15,000 × 0.88849) \n= $7,767 + 11,311 + 9,151 + 13,327 = $41,556"
    },
    //6;4
    {
      question:
        "Micro Brewery borrows $300,000 to be repaid in equal installments over a period of three years. The loan payments are semiannual with the first payment due in six months, and interest is at 6%. What is the amount of each payment?",
      type: "radio",
      options: [
        {
          content: "$55,379.",
          id: "d1"
        },
        {
          content: "$106,059.",
          id: "d2"
        },
        {
          content: "$30,138.",
          id: "d3"
        },
        {
          content: "$60,276.",
          id: "d4"
        }
      ],
      answer: ["d1"],
      explain: "$300,000 ÷ 5.41719* = $55,379\n*PVA of $1: n = 6; i = 3%"
    },
    //6:5
    {
      question:
        "A firm leases equipment under a long-term lease (analogous to an installment purchase) that calls for 12 semiannual payments of $39,014.40. The first payment is due at the inception of the lease. The annual rate on the lease is 6%. What is the value of the leased asset at inception of the lease?",
      type: "radio",
      options: [
        {
          content: "$388,349.",
          id: "e1"
        },
        {
          content: "$400,000.",
          id: "e2"
        },
        {
          content: "$454,128.",
          id: "e3"
        },
        {
          content: "$440,082.",
          id: "e4"
        }
      ],
      answer: ["e2"],
      explain:
        "PVAD = $39,014.40 × 10.25262 * = $400,000\n*PVAD of $1: n = 12; i = 3%"
    },
    //6:6
    {
      question:
        "Rosie's Florist borrows $300,000 to be paid off in six years. The loan payments are semiannual with the first payment due in six months, and interest is at 6%. What is the amount of each payment?",
      type: "radio",
      options: [
        {
          content: "$25,750.",
          id: "f1"
        },
        {
          content: "$29,761.",
          id: "f2"
        },
        {
          content: "$30,139",
          id: "f3"
        },
        {
          content: "$25,500",
          id: "f4"
        }
      ],
      answer: ["f3"],
      explain: "$300,000 ÷ 9.95400* = $30,139\n*PVA of $1: n = 12; i = 3%"
    },
    //6:7
    {
      question:
        "Debbie has $368,882 accumulated in a 401K plan. The fund is earning a low, but safe, 3% per year. The withdrawals will take place annually starting today. How soon will the fund be exhausted if Debbie withdraws $30,000 each year?",
      type: "radio",
      options: [
        {
          content: "15 years.",
          id: "g1"
        },
        {
          content: "16 years.",
          id: "g2"
        },
        {
          content: "14 year",
          id: "g3"
        },
        {
          content: "12.3 years.",
          id: "g4"
        }
      ],
      answer: ["g1"],
      explain:
        "$368,882 ÷ $30,000 = 12.29607\nFor PVAD of $1 factor of 12.29607 and i of 3%, n = 15"
    }
  ],
  //module 7
  [
    //7:1
    {
      question:
        "At the end of each quarter, Don deposits $500 into an account that pays 12% interest compounded quarterly. How much will Don have in the account in three years?",
      type: "radio",
      options: [
        {
          content: " $7,096",
          id: "a1"
        },
        {
          content: "$6,997",
          id: "a2"
        }
      ],
      answer: ["a1"],
      explain: "FVA = $500 × 14.1920* = $7,096\n*FVA of $1: n = 12; i = 3%"
    },
    //7:2
    {
      question:
        "Sane Company has received an award which entitles it to receive annual payments of $10,000 at the end of each year for the next ten years. Which of the following is used to calculate the future value of this award?",
      type: "radio",
      options: [
        {
          content: "Present Value of an Ordinary Annuity of $1",
          id: "b1"
        },
        {
          content: "Future Value of an Annuity Due of $1",
          id: "b2"
        }
      ],
      answer: ["b1"],
      explain: ""
    },
    //7:3
    {
      question:
        "At the end of each quarter, you deposit $500 into an account that pays 12% interest compounded quarterly. How much will you have in the account in three years?",
      type: "radio",
      options: [
        {
          content: "$7,096.",
          id: "c1"
        },
        {
          content: "$7,213.",
          id: "c2"
        },
        {
          content: "$7,129.",
          id: "c3"
        },
        {
          content: "$8,880.",
          id: "c4"
        }
      ],
      answer: ["c1"],
      explain:
        "Explanation:  FVA = $500 × 14.1920* = $7,096\n*FVA of $1: n = 12; i = 3%"
    }
  ],
  //module 8
  [
    //8:1
    {
      question:
        "You deposit $2,000 in an IRA account on April 15, 2018. Assume the account will earn 3% annually. If you repeat this for the next nine years, how much will you have on April 14, 2028?",
      type: "radio",
      options: [
        {
          content: "$20,600.",
          id: "a1"
        },
        {
          content: "$20,928.",
          id: "a2"
        },
        {
          content: "$23,616.",
          id: "a3"
        },
        {
          content: "$24,715.",
          id: "a4"
        }
      ],
      answer: ["a3"],
      explain: "FVAD = $2,000 × 11.8078* = $23,616\n*FVAD of $1: n = 10; i = 3%"
    },
    //8:2
    {
      question:
        "Sonia deposits $5,000 in an IRA account on April 15, 2018. Assume the account will earn 3% annually. If she repeats this for the next nine years, how much will she have on April 14, 2028?",
      type: "radio",
      options: [
        {
          content: "$59,039",
          id: "b1"
        },
        {
          content: "$58,296",
          id: "b2"
        }
      ],
      answer: ["b1"],
      explain: "*FVAD of $1: n = 10; i = 3%"
    },
    //8:3
    {
      question:
        "Sondra deposits $2,000 in an IRA account on April 15, 2018. Assume the account will earn 3% annually. If she repeats this for the next nine years, how much will she have on deposit on April 14, 2028?",
      type: "radio",
      options: [
        {
          content: "$20,600",
          id: "c1"
        },
        {
          content: "$20,928.",
          id: "c2"
        },
        {
          content: "$23,616.",
          id: "c3"
        },
        {
          content: "$24,715.",
          id: "c4"
        }
      ],
      answer: ["c3"],
      explain: "FVAD = $2,000 × 11.8078* = $23,616\n*FVAD of $1: n = 10; i = 3%"
    }
  ],
  //module 9
  [
    //9:1
    {
      question:
        "On January 1, 2018, you are considering making an investment that will pay three annual payments of $10,000. The first payment is not expected until December 31, 2020. You are eager to earn 3%. What is the present value of the investment on January 1, 2018?",
      type: "radio",
      options: [
        {
          content: "$26,662.",
          id: "a1"
        },
        {
          content: "$27,462.",
          id: "a2"
        },
        {
          content: "$28,286.",
          id: "a3"
        },
        {
          content: "$29,135.",
          id: "a4"
        }
      ],
      answer: ["a1"],
      explain:
        "PVA = $10,000 × (4.57971* - 1.91347**) = $26,662\n*PVA of $1: n = 5; i = 3% **PVA of $1: n = 2; i = 3%"
    },
    //9:2
    {
      question:
        "On January 1, 2018, you are considering making an investment that will pay three annual payments of $10,000. The first payment is not expected until December 31, 2021. You are eager to earn 3%. What is the present value of the investment on January 1, 2018?",
      type: "radio",
      options: [
        {
          content: "$28,286.",
          id: "b1"
        },
        {
          content: "$25,886.",
          id: "b2"
        },
        {
          content: "$26,662.",
          id: "b3"
        },
        {
          content: "$27,300.",
          id: "b4"
        }
      ],
      answer: ["b2"],
      explain:
        "PVA = $10,000 × (5.41719* - 2.82861**) = $25,886\n*PVA of $1: n = 6; i = 3% **PVA of $1: n = 3; i = 3 "
    },
    //9:3
    {
      question:
        "ABC Corporation will receive $10,000 a year at the end of each of the next five years. Using a discount rate of 14%, the present value of the receipts can be stated as ________.",
      type: "radio",
      options: [
        {
          content: "PV = $10,000 (Annuity Due PV factor, i = 14%, n = 5)",
          id: "c1"
        },
        {
          content: "PV = $10,000 (Ordinary Annuity PV factor, i = 14%, n = 5)",
          id: "c2"
        }
      ],
      answer: ["c2"],
      explain: ""
    },
    //9:4
    {
      question:
        "Donna's Dentist borrows $700,000 to be paid off in six years. The loan payments are semiannual with the first payment due in six months, and interest is at 6%. What is the amount of each payment?",
      type: "radio",
      options: [
        {
          content: "$70,101",
          id: "d1"
        },
        {
          content: "$70,323",
          id: "d2"
        }
      ],
      answer: ["d2"],
      explain: "*PVA of $1: n = 12; i = 3%"
    },
    //9:5
    {
      question:
        "Frank’s Brewery borrows $800,000 to be repaid in equal installments over a period of three years. The loan payments are semiannual with the first payment due in six months, and interest is at 6%. What is the amount of each payment?",
      type: "radio",
      options: [
        {
          content: "$150,216",
          id: "e1"
        },
        {
          content: "$148,128",
          id: "e2"
        },
        {
          content: "$157,678",
          id: "e3"
        },
        {
          content: "$147,678",
          id: "e4"
        }
      ],
      answer: ["e4"],
      explain: "*PVA of $1: n = 6; i = 3%"
    },
    //9:6
    {
      question:
        "ABC Corporation will receive $100,000 a year at the end of each of the next five years. Using a discount rate of 14%, the present value of the receipts can be stated as ________.",
      type: "radio",
      options: [
        {
          content: "PV = $100,000 (Annuity Due PV factor, i = 14%, n = 5)",
          id: "f1"
        },
        {
          content: "PV = $100,000 (Ordinary Annuity PV factor, i = 14%, n = 5)",
          id: "f2"
        }
      ],
      answer: ["f2"],
      explain: ""
    },
    //9:7
    {
      question:
        "Rosie's Florist borrows $300,000 to be paid off in six years. The loan payments are semiannual with the first payment due in six months, and interest is at 6%. What is the amount of each payment?",
      type: "radio",
      options: [
        {
          content: "$25,750.",
          id: "g1"
        },
        {
          content: "$29,761.",
          id: "g2"
        },
        {
          content: "$30,139.",
          id: "g3"
        },
        {
          content: "$25,500.",
          id: "g4"
        }
      ],
      answer: ["g3"],
      explain: "$300,000 ÷ 9.95400* = $30,139\n*PVA of $1: n = 12; i = 3%"
    }
  ],
  //module 10
  [
    //10:1
    {
      question:
        "You want to cash in your winning lottery ticket. You can either receive eight $100,000 semiannual payments starting today, or she can receive a single-amount payment today based on a 6% annual interest rate. What is the single-amount payment you can receive today?",
      type: "radio",
      options: [
        {
          content: "$853,020.",
          id: "a1"
        },
        {
          content: "$801,969.",
          id: "a2"
        },
        {
          content: "$744,090.",
          id: "a3"
        },
        {
          content: "$723,028",
          id: "a4"
        }
      ],
      answer: ["a4"],
      explain:
        "PVAD = $100,000 × 12.93794* = $723,028\n*PVAD of $1: n = 8; i = 3%"
    },
    //10:2
    {
      question:
        "Phoebe wants to cash in her winning lottery ticket. She can either receive eight $100,000 semiannual payments starting today, or she can receive a single-amount payment today based on a 6% annual interest rate. What is the single-amount payment she should receive today?",
      type: "radio",
      options: [
        {
          content: "$724,218",
          id: "b1"
        },
        {
          content: "$723,028",
          id: "b2"
        },
        {
          content: "$725,999",
          id: "b3"
        }
      ],
      answer: ["b2"],
      explain:
        "PVAD = $100,000 × 12.93794* = $723,028\n*PVAD of $1: n = 8; i = 3%"
    },
    //10:3
    {
      question:
        "Debbie has $368,882 accumulated in a 401K plan. The fund is earning a low, but safe, 3% per year. The withdrawals will take place annually starting today. How soon will the fund be exhausted if Debbie withdraws $30,000 each year?",
      type: "radio",
      options: [
        {
          content: "14",
          id: "c1"
        },
        {
          content: "15",
          id: "c2"
        }
      ],
      answer: ["c2"],
      explain:
        "$368,882 ÷ $30,000 = 12.29607\nFor PVAD of $1 factor of 12.29607 and i of 3%, n = 15"
    },
    //10:4
    {
      question:
        "Pavel wants to cash in his winning lottery ticket. He can either receive five $10,000 annual payments starting today, or he can receive one lump-sum payment today based on a 3% annual interest rate. What would be the lump-sum payment?",
      type: "radio",
      options: [
        {
          content: "$49,195",
          id: "e1"
        },
        {
          content: "$47,171",
          id: "e2"
        },
        {
          content: "$46,664",
          id: "e3"
        },
        {
          content: "$46,121",
          id: "e4"
        }
      ],
      answer: ["e2"],
      explain: "PVAD = $10,000 × 4.71710* = $47,171\n*PVAD of $1: n = 5; i = 3%"
    },
    //10:5
    {
      question:
        "A firm leases equipment under a long-term lease (similar to an installment purchase) that calls for 12 semiannual payments of $50,000. The first payment is due at the beginning of the lease. The annual rate on the lease is 6%. What is the value of the leased asset at inception of the lease?",
      type: "radio",
      options: [
        {
          content: "$499,631",
          id: "f1"
        },
        {
          content: "$502,774",
          id: "f2"
        },
        {
          content: "$509,391",
          id: "f3"
        },
        {
          content: "$512,631",
          id: "f4"
        }
      ],
      answer: ["f4"],
      explain:
        "PVAD = $50,000 × 10.25262 * = $512,631\n(*PVAD of $1: n = 12; i = 3%) "
    },
    //10:6
    {
      question:
        "Jose wants to cash in his winning lottery ticket. He can either receive five $5,000 annual payments starting today, or he can receive one lump-sum payment today based on a 3% annual interest rate. What would be the lump-sum payment?",
      type: "radio",
      options: [
        {
          content: "$23,586.",
          id: "g1"
        },
        {
          content: "$22,899.",
          id: "g2"
        },
        {
          content: "$21,565.",
          id: "g3"
        },
        {
          content: "$23,000.",
          id: "g4"
        }
      ],
      answer: ["g1"],
      explain: "PVAD = $5,000 × 4.71710* = $23,586\n*PVAD of $1: n = 5; i = 3%"
    },
    //10:7
    {
      question:
        "Shelley wants to cash in her winning lottery ticket. She can either receive eight $100,000 semiannual payments starting today, or she can receive a single-amount payment today based on a 6% annual interest rate. What is the single-amount payment she can receive today?",
      type: "radio",
      options: [
        {
          content: "$853,020.",
          id: "h1"
        },
        {
          content: "$801,969.",
          id: "h2"
        },
        {
          content: "$744,090.",
          id: "h3"
        },
        {
          content: "$723,028",
          id: "h4"
        }
      ],
      answer: ["h4"],
      explain:
        "PVAD = $100,000 × 12.93794* = $723,028\n*PVAD of $1: n = 8; i = 3%"
    },
    //10:8
    {
      question:
        "A firm leases equipment under a long-term lease (analogous to an installment purchase) that calls for 12 semiannual payments of $39,014.40. The first payment is due at the inception of the lease. The annual rate on the lease is 6%. What is the value of the leased asset at inception of the lease?",
      type: "radio",
      options: [
        {
          content: "$388,349.",
          id: "i1"
        },
        {
          content: "$400,000.",
          id: "i2"
        },
        {
          content: "$454,128.",
          id: "i3"
        },
        {
          content: "$440,082.",
          id: "i4"
        }
      ],
      answer: ["i2"],
      explain:
        "Explanation:  PVAD = $39,014.40 × 10.25262 * = $400,000\n*PVAD of $1: n = 12; i = 3%"
    }
  ]
];
function getQuiz(x) {
  return quizQuestions[x];
}

export default getQuiz;

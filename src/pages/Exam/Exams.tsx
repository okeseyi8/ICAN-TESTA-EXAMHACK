
// import { FaMicrophone } from "react-icons/fa6";
import Caution from "../../assets/icons/caution.svg?react";
import Flag from "../../assets/icons/flag-2.svg?react";
import { useCountdown } from "../../hooks/useCountdown";
import usePaginate from "../../hooks/usePaginate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAntiCheat from "../../hooks/useAntiCheat";

const Exams = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question:
        "Mr. Koffi, in partnership with Mr. Nana, withdrew GH¢100,000 from the partnership account for his personal use.",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 2,
      question:
        "The profit of a business may be calculated by using which one of the following formulae",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 3,
      question:
        "The revenue of a company was ₦2 million and its receivables were 5% of turnover. The company wishes to have an allowance for doubtful debts of 4% of receivables, which would make the allowance 33% higher than the current allowance. What figure would appear in the statement of profit or loss in respect of doubtful debts? ",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 4,
      question:
        "On 1 May 20X9, A Ltd pays a rent bill of ₦1,800 for the period to 30 April 20Y0.What are the charges to the statement of profit or loss and the entry in the statement of financial position for the year ended 30 November 20X9?",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 5,
      question:
        "On 1 May 20X9, A Ltd pays a rent bill of ₦1,800 for the period to 30 April 20Y0.What are the charges to the statement of profit or loss and the entry in the statement of financial position for the year ended 30 November 20X9?",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 6,
      question:
        "Z’s bank statement shows a balance of ₦825 overdrawn. The bank statement includes bank charges of ₦50, which have not been entered in the cash book. There are unpresented cheques totalling ₦475 and deposits not yet credited of ₦800. The bank statement incorrectly shows a direct debit payment of ₦160, which belongs to another customer. The figure for the bank balance in the statement of financial position should be",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 7,
      question:
        "The revenue of a company was ₦2 million and its receivables were 5% of turnover. The company wishes to have an allowance for doubtful debts of 4% of receivables, which would make the allowance 33% higher than the current allowance. What figure would appear in the statement of profit or loss in respect of doubtful debts? ",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 8,
      question:
        "On 1 May 20X9, A Ltd pays a rent bill of ₦1,800 for the period to 30 April 20Y0.What are the charges to the statement of profit or loss and the entry in the statement of financial position for the year ended 30 November 20X9?",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 9,
      question:
        "On 1 May 20X9, A Ltd pays a rent bill of ₦1,800 for the period to 30 April 20Y0.What are the charges to the statement of profit or loss and the entry in the statement of financial position for the year ended 30 November 20X9?",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
    {
      id: 10,
      question:
        "Z’s bank statement shows a balance of ₦825 overdrawn. The bank statement includes bank charges of ₦50, which have not been entered in the cash book. There are unpresented cheques totalling ₦475 and deposits not yet credited of ₦800. The bank statement incorrectly shows a direct debit payment of ₦160, which belongs to another customer. The figure for the bank balance in the statement of financial position should be",
      options: [
        "Credited into his capital account",
        "Debited into his current account",
        "Credited into his current account",
        "Debited into his capital account",
      ],
    },
  ];
  const { time } = useCountdown(3600);
  const {
    current,
    currentIndex,
    total,
    hasNext,
    next,
    hasPrev,
    prev,
    goTo,
  } = usePaginate(questions);
  const [answers, setAnswers] = useState<
    { questionId: number; selectedOption: string; flagged: boolean }[]
  >([]);
  console.log(answers);
useAntiCheat({
  onViolation: (type, message) => {
    console.warn(`[${type.toUpperCase()} VIOLATION] violating`);
    alert(message); 
  }
});

  // useAntiCheat({ onViolation: handleViolation });
  const progress = (answers.length / questions.length) * 100;
  const handleSelectAnswer = (questionId: number, selectedOption: string) => {
    setAnswers((prev) => {
      const existing = prev.find((ans) => ans.questionId === questionId);
      if (existing) {
        return prev.map((ans) =>
          ans.questionId === questionId ? { ...ans, selectedOption } : ans
        );
      } else {
        return [...prev, { questionId, selectedOption, flagged: false }];
      }
    });
  };

  return (
    <div className="bg-[#f5f5f5] h-auto flex flex-col items-center w-full  pt-4 px-12.5">
      <div className="w-full flex gap-3.5 my-7.5 p-6.5 bg-[#FEFCE8] items-center rounded-2xl border border-[#FEF08A]">
        <div>
          <Caution />
        </div>
        <div className="text-[#BF7300]">
          <h2 className="font-bold text-[#BF7300] text-[24px]">
            You Are Being Monitored
          </h2>
          <p className="font-medium">
            To ensure academic integrity, this exam session will be proctored.
            Your{" "}
            <span className="font-bold">
               camera and microphone will be active 
            </span>
            throughout the exam. Any suspicious activity will be flagged for
            review.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between ">
        <div>
          <h2 className="font-bold text-[30px]">
            Quantitative Techniques in Business (QTB)
          </h2>
          <p className="font-medium text-[24px] text-[#736B6B]">
            Question {currentIndex + 1} of {total}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-medium text-[24px] text-[#736B6B]">
            Time Remaining
          </p>
          <p className="font-bold text-[30px] text-[#2534D7]">{time}</p>
        </div>
      </div>
      <div className=" relative w-full bg-[#DEEDFF] h-3 rounded-[50px] mt-3">
        {/* <div className="absolute top-0 left-0 w-1/10 h-5 rounded-[50px] bg-[#2534D7] z-10"></div> */}
        <div
          className="absolute top-0 left-0 h-3 rounded-[50px] bg-[#2534D7] z-10 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="quesNav w-full my-4">
        <div className="quesNav w-full my-4">
          <div>
            <ul className="flex gap-4">
              {questions.map((q, index) => {
                const isCurrent = index === currentIndex;
                const isAnswered = answers.some((a) => a.questionId === q.id);

                let bgClass = "bg-white";
                if (isAnswered) {
                  bgClass = "bg-[#B1B6EF]";
                } else if (isCurrent && isAnswered) {
                  bgClass = "bg-[#B1B6EF]";
                } else if (isCurrent && !isAnswered) {
                  bgClass = "bg-[#D9D9D9]";
                }

                return (
                  <li key={index} onClick={() => goTo(index)}>
                    <h3
                      className={`flex cursor-pointer font-bold text-[24px] justify-center items-center border rounded-full w-12 h-12 ${bgClass}`}
                    >
                      {index + 1}
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full my-12.5 bg-white border rounded-3xl p-10 shadow-md">
        <div className="flex gap-30">
          <h2
            onClick={() =>
              setAnswers((prev) => ({
                ...prev,
              }))
            }
            className="w-[85%] font-semibold text-3xl"
          >
            {current.question}
          </h2>
          <button className="bg-[#91B5FF] cursor-pointer w-[15%] flex justify-center items-center font-semibold text-[20px] rounded-2xl h-[62px] px-2 ">
            <Flag className="w-[31px]" />
            <span className=" text-[#444]">Flag Question</span>
          </button>
        </div>

        <ul className="mt-6 flex flex-col gap-3">
          {current.options.map((option, i) => {
            const selectedOption = answers.find(
              (a) => a.questionId === current.id
            )?.selectedOption;
            const isSelected = selectedOption === option;

            return (
              <li
                key={i}
                onClick={() => handleSelectAnswer(current.id, option)}
                className={`flex items-center gap-3 font-normal text-[24px] border px-4 py-3 rounded-2xl cursor-pointer transition-colors duration-200 ${
                  isSelected ? "bg-[#B1B6EF] border-[#2534D7]" : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${current.id}`}
                  value={option}
                  checked={isSelected}
                  onChange={() => handleSelectAnswer(current.id, option)}
                  className="w-6 h-6 accent-[#2534D7] cursor-pointer"
                />
                <span>
                  {String.fromCharCode(65 + i)}. {option}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="w-full flex justify-between mt-30">
          <div>
            {hasPrev && (
              <button
                onClick={prev}
                disabled={!hasPrev}
                className="py-2 bg-[var(--primary-color)] w-58 rounded-sm text-white font-bold text-xl disabled:opacity-50"
              >
                Back
              </button>
            )}
          </div>

          <button
            onClick={() => {
              if (hasNext) {
                next();
              } else {
                navigate("/dashboard/exam-submitted");
              }
            }}
            className={`py-2 cursor-pointer ${
              hasNext ? "bg-[var(--primary-color)]" : "bg-[#109618]"
            } w-58 rounded-sm text-white font-bold text-xl disabled:opacity-50`}
          >
            {hasNext ? "Next" : "Submit"}
          </button>
        </div>
      </div>
      <div className="my-5 text-center text-sm text-gray-500 tracking-wide">
        Powered by  ICAN x TESTA
      </div>
    </div>
  );
};

export default Exams;

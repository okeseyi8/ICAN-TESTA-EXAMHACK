import MainLayout from "../../layout/MainLayout/MainLayout";
// import { FaMicrophone } from "react-icons/fa6";
import Caution from "../../assets/icons/caution.svg?react";
import Flag from "../../assets/icons/flag-2.svg?react";
import { useCountdown } from "../../hooks/useCountdown";
import usePaginate from "../../hooks/usePaginate";

const Exams = () => {
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
  ];
  const { time, isDone } = useCountdown(3600);
  const { current, currentIndex, total, hasNext, next , hasPrev, prev, goTo} = usePaginate(
    questions
  );

  return (
    <MainLayout>
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
        <div className=" relative w-full bg-[#DEEDFF] h-5 rounded-[50px] mt-3">
          <div className="absolute top-0 left-0 w-1/10 h-5 rounded-[50px] bg-[#2534D7] z-10"></div>
        </div>

        <div className="quesNav w-full my-4">
          <div>
            <ul className="flex gap-4">
              {questions.map((q, index) => {
                return (
                  <li onClick={() => goTo(index)}>
                    <h3
                      key={index}
                      className="flex bg-[#D9D9D9] font-bold text-[24px] justify-center items-center border rounded-full w-12 h-12"
                    >
                      {index + 1}
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full mt-12.5 bg-white border rounded-3xl p-10 shadow-md">
          <div className="flex gap-45">
            <h2 className="font-semibold text-3xl">{current.question}</h2>
            <button className="bg-[#91B5FF] flex justify-center items-center font-semibold text-[20px] rounded-2xl h-[62px] px-2 w-57">
              <Flag className="w-[31px]" />
              <span className="text-[#444]">Flag Question</span>
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {current.options.map((option, i) => (
              <li
                key={i}
                className="flex items-center gap-2 font-normal text-[24px] border px-2.5 py-3 rounded-2xl"
              >
                <input type="radio" name={`question-${current.id}`} />
                {String.fromCharCode(65 + i)}. {option}
              </li>
            ))}
          </ul>

          <div className="w-full flex justify-between mt-30">
          <div>
            {
                hasPrev && <button
              onClick={prev}
              disabled={!hasPrev}
              className="py-2 bg-[var(--primary-color)] w-58 rounded-sm text-white font-bold text-xl disabled:opacity-50"
            >
              Back
            </button>
            }
          </div>

            <button
              onClick={next}
              disabled={!hasNext}
              className="py-2 bg-[var(--primary-color)] w-58 rounded-sm text-white font-bold text-xl disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Exams;

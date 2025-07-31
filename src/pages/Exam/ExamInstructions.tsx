import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { IoIosArrowBack } from "react-icons/io";
import { HiClock } from "react-icons/hi2";
import Aiimg from "../../assets/icons/aiimg.svg?react";
import Caution from "../../assets/icons/caution.svg?react";
import Icanimg from "../../assets/icons/icaninsimg.svg?react";

const ExamInstructions = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="bg-[#f5f5f5] flex flex-col items-center w-full  pt-4 ">
        <div
          onClick={() => navigate("/dashboard")}
          className="w-full  mt-5 flex items-center px-12 gap-3 font-bold"
        >
          <IoIosArrowBack className="text-2xl" />
          <p className="text-xl"></p>
        </div>
        <div className="w-9/10 mt-8 bg-white mb-9 flex flex-col p-7.5 mx-12 rounded-3xl shadow-md">
          <h3 className="font-bold text-[40px]">Exam Instructions</h3>
          <p className="text-[#444] text-xl my-1">
            Please read the following instructions carefully before you begin.
          </p>
          <div className="w-full flex justify-between">
            <div className="w-3/10 text-xl gap-5 h-26 rounded-[15px] flex items-center px-4.5 bg-[#C4D5FA]">
              <Icanimg className="text-[#2534D7]" />

              <p>10 Exam Questions</p>
            </div>
            <div className="w-3/10 text-xl gap-5 h-26 rounded-[15px] flex items-center px-4.5 bg-[#C4D5FA]">
              <HiClock className="text-[#2534D7]" />
              <p>45 Minutes Duration</p>
            </div>
            <div className="w-3/10 text-xl gap-5 h-26 rounded-[15px] flex items-center px-4.5 bg-[#C4D5FA]">
              <Aiimg className="text-[#2534D7] text-2xl" />
              <p>AI Proctoring Enabled</p>
            </div>
          </div>
          <div className="flex gap-3.5 my-7.5 p-6.5 bg-[#FEFCE8] items-center rounded-2xl border border-[#FEF08A]">
            <div>
              <Caution />
            </div>
            <div className="text-[#BF7300]">
              <h2 className="font-bold text-[#BF7300] text-[24px]">You Are Being Monitored</h2>
              <p className="font-medium">
                To ensure academic integrity, this exam session will be
                proctored. Your <span className="font-bold"> camera and microphone will be active </span>throughout
                the exam. Any suspicious activity will be flagged for review.
              </p>
            </div>
          </div>

        
         
          <h3 className="font-bold text-xl mt-5">Rules and Regulations</h3>
          <ul className="list-disc font-normal text-lg px-7.5">
            <li>
             Ensure you are in a quiet, well-lit room with no one else present.
            </li>
            <li>
              Keep your face centered and visible in the camera frame at all times.
            </li>
            <li>
             Do not use any unauthorized materials, including other websites, notes, or mobile devices.
            </li>
            <li>
              Do not communicate with anyone during the exam.
            </li>
            <li>
              You can flag questions for review and return to them later if time permits.
            </li>
          </ul>
          <div className="flex gap-1 items-center mt-5">
            {/* <AiFillWarning className="text-xl"/> */}

            <h3 className="font-bold text-xl ">⚠️ Disqualification Triggers</h3>
          </div>
          <ul className="list-disc font-normal text-lg px-7.5">
            <li>Repeated tab switching</li>
            <li>Face not detected for extended periods</li>
            <li>Background voices or external help</li>
            <li>Attempting to use unauthorized tools</li>
            <li>
              Use the “Submit Exam” button only when you're done. Submissions
              are final
            </li>
          </ul>
          <div className="w-full flex justify-center">
            <button
              onClick={() => navigate("/dashboard/exam")}
              className="w-auto px-4 rounded-sm py-3 mt-8 bg-[var(--primary-color)] text-white"
            >
              I understand, Proceed to verification
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ExamInstructions;

import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { IoIosArrowBack } from "react-icons/io";

const ExamInstructions = () => {
    const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="bg-[#f5f5f5] flex flex-col items-center w-full  pt-4 ">
        <div onClick={() => navigate("/dashboard")} className="w-full  mt-5 flex items-center px-12 gap-3 font-bold">
          <IoIosArrowBack className="text-2xl" />
          <p className="text-xl">Exam Instructions</p>
        </div>
        <div className="w-9/10 mt-8 bg-white mb-9 flex flex-col p-7.5 mx-12 rounded-3xl shadow-md">
          <h3 className="font-bold text-xl">Before You Begin</h3>
          <ul className="list-disc font-normal text-lg px-7.5">
            <li>
              Ensure your camera and microphone are active. This exam uses AI
              proctoring to monitor activity
            </li>
            <li>
              Make sure you have a stable internet connection. If connection
              drops, your progress will auto-save locally and sync when
              restored.
            </li>
            <li>Use a quiet and well-lit environment to avoid false alerts.</li>
          </ul>
          <h3 className="font-bold text-xl mt-5">Time Management</h3>
          <ul className="list-disc font-normal text-lg px-7.5">
            <li>A countdown timer is displayed at the top of the screen.</li>
            <li>The exam will auto-submit when time is up</li>
          </ul>
          <h3 className="font-bold text-xl mt-5">During the Exam</h3>
          <ul className="list-disc font-normal text-lg px-7.5">
            <li>
              Do not switch tabs. Every tab switch will be logged and flagged.
            </li>
            <li>
              Do not speak out loud or have background conversations. Voice
              detection is active.
            </li>
            <li>
              Ensure your face remains visible in the camera at all times.
            </li>
            <li>
              You can flag questions for review and navigate freely using the
              question panel.
            </li>
            <li>
              Use the “Submit Exam” button only when you're done. Submissions
              are final
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
            <button className="w-58 rounded-sm py-3 mt-8 bg-[var(--primary-color)] text-white">
              Start
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ExamInstructions;

import { motion } from "framer-motion";
import Header from "../../components/Header";
import { CiCalculator2 } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <div className="bg-[#f0f7ff] flex flex-col items-center h-auto py-4">
        <section className="h-76.5 w-10/12 flex flex-col justify-center items-center bg-white  rounded-[15px] shadow-md">
          <div className="w-33 rounded-full overflow-hidden">
            <img src="/images/icanprofile.png" />
          </div>
          <h1 className="font-bold text-3xl mt-2">
            Welcome back, Adeyemi David
          </h1>
          <h3 className="text-[20px] mt-2">Welcome to your Dashboard</h3>
        </section>
        <section className="w-10/12 flex mt-5 gap-5 ">
          <div className="w-7/12 flex flex-col gap-5 ">
            <div className="w-full rounded-[15px] shadow-md bg-white h-auto  p-8.5">
              <h2 className="text-3xl font-bold">Today Exams </h2>
              <div className="today-exams mt-5">
                <div className="flex justify-between">
                  <div className="flex gap-6 items-center">
                    <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                      <CiCalculator2 className=" text-[43px]" />
                    </div>
                    <div>
                      <h3 className="font-bold ">
                        Quantitative Techniques in Business (QTB)
                      </h3>
                      <p>Foundation Level Exam</p>
                    </div>
                  </div>
                  <p>1 Credit Exam</p>
                </div>
                <div className="mt-3 ">
                  <div className="flex items-center gap-1">
                    <LuCalendarDays className="text-[#444]" />
                    <p className="text-[#736B6B]"> Diet: May/Nov</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <BsClock className="text-[#444]" />
                    <p className="text-[#736B6B]">
                      {" "}
                      Time: 45mins (2:00pm - 2:45pm)
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <p className="font-bold">
                    Total Marks:{" "}
                    <span className="text-[var(--primary-color)]">80</span>
                  </p>
                  <button className="bg-[var(--primary-color)] text-white w-auto py-2 px-4 rounded-[5px]">
                    Starts In: 30mins
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full rounded-[15px] shadow-md bg-white h-auto  p-8.5">
              <h2 className="text-3xl font-bold">Upcoming Exams </h2>
              <div className="upcoming-exams mt-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 items-center">
                    <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                      <CiCalculator2 className=" text-[43px]" />
                    </div>
                    <div>
                      <h3 className="font-bold ">Business and Finance</h3>
                      <p>Foundation Level Exam</p>
                    </div>
                  </div>
                  <p>1 Credit Exam</p>
                </div>
                <div className="mt-3 ">
                  <div className="flex items-center gap-1">
                    <LuCalendarDays className="text-[#444]" />
                    <p className="text-[#736B6B]"> Diet: May/Nov</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <BsClock className="text-[#444]" />
                    <p className="text-[#736B6B]">
                      {" "}
                      Time: 45mins (2:00pm - 2:45pm)
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <p className="font-bold">
                    Total Marks:{" "}
                    <span className="text-[var(--primary-color)]">80</span>
                  </p>
                  <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Take a Mock
                  </button>
                </div>
              </div>
              <div className="upcoming-exams mt-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 items-center">
                    <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                      <CiCalculator2 className=" text-[43px]" />
                    </div>
                    <div>
                      <h3 className="font-bold ">Business and Finance</h3>
                      <p>Foundation Level Exam</p>
                    </div>
                  </div>
                  <p>1 Credit Exam</p>
                </div>
                <div className="mt-3 ">
                  <div className="flex items-center gap-1">
                    <LuCalendarDays className="text-[#444]" />
                    <p className="text-[#736B6B]"> Diet: May/Nov</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <BsClock className="text-[#444]" />
                    <p className="text-[#736B6B]">
                      {" "}
                      Time: 45mins (2:00pm - 2:45pm)
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <p className="font-bold">
                    Total Marks:{" "}
                    <span className="text-[var(--primary-color)]">80</span>
                  </p>
                  <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Take a Mock
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/12">
            <div className=" rounded-[15px] shadow-md bg-white h-[320px]  p-8.5">
              <h2 className="text-3xl font-bold">My Courses</h2>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                    <CiCalculator2 className=" text-[43px]" />
                  </div>
                  <div>
                    <h3 className="font-bold "> Financial Accounting</h3>
                    <p>Foundation Level Exam</p>
                  </div>
                </div>
                <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Take a Course 
                  </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                    <CiCalculator2 className=" text-[43px]" />
                  </div>
                  <div>
                    <h3 className="font-bold ">Management Information</h3>
                    <p>Foundation Level Exam</p>
                  </div>
                </div>
                <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Take a Course 
                  </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                    <CiCalculator2 className=" text-[43px]" />
                  </div>
                  <div>
                    <h3 className="font-bold ">Business Law</h3>
                    <p>Foundation Level Exam</p>
                  </div>
                </div>
                <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Take a Course 
                  </button>
              </div>
            </div>
            <div className=" mt-5 rounded-[15px] shadow-md bg-white h-[320px]  p-8.5">
              <h2 className="text-3xl font-bold">Completed Exams</h2>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                    <CiCalculator2 className=" text-[43px]" />
                  </div>
                  <div>
                    <h3 className="font-bold "> Financial Accounting</h3>
                    <p>Foundation Level Exam</p>
                  </div>
                </div>
                <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Check Result
                  </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                    <CiCalculator2 className=" text-[43px]" />
                  </div>
                  <div>
                    <h3 className="font-bold ">Management Information</h3>
                    <p>Foundation Level Exam</p>
                  </div>
                </div>
                <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Check Result
                  </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <div className="w-15 rounded-[5px] h-15 flex justify-center items-center bg-[#ECF5FE]">
                    <CiCalculator2 className=" text-[43px]" />
                  </div>
                  <div>
                    <h3 className="font-bold ">Business Law</h3>
                    <p>Foundation Level Exam</p>
                  </div>
                </div>
                <button className="bg-[#f0f7ff] border border-[#444] text-black w-30 py-2 rounded-[5px]">
                    Check Result
                  </button>
              </div>
            </div>
            
            </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Dashboard;

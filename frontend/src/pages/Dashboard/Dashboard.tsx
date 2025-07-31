import { CiCalculator2 } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="bg-[#f0f7ff] flex flex-col items-center h-auto py-4">
        <section className="h-76.5 w-10/12  bg-white py-6  px-15 rounded-[15px] shadow-md">
          <div className="flex gap-7 ">
            <div className="">
              <img
                className="w-19  rounded-full overflow-hidden"
                src="/images/icanprofile.png"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="font-bold text-3xl ">
                Welcome back, Adeyemi David
              </h1>
              <h3 className="text-[16px] mt-2">ICAN 5678</h3>
            </div> 
          </div>
          <div className="w-full flex mt-15.5 justify-between">
            <h2 className="font-bold text-[28px]">Professional</h2>
            <p className="text-xl h-6.5 font-medium text-[#736B6B] bg-[#D9D9D9] flex items-center px-1.5 rounded-[15px] z-0">75% Completed</p>
          </div>
          <div className=" relative w-full bg-[#DEEDFF] h-5 rounded-[50px] mt-3">
            <div className="absolute top-0 left-0 w-7/10 h-5 rounded-[50px] bg-[#2534D7] z-10"></div>
            
          </div>
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
                  <button
                    onClick={() => navigate("/dashboard/exam-rules")}
                    className="bg-[var(--primary-color)] text-white w-auto py-2 px-4 rounded-[5px]"
                  >
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
    </MainLayout>
  );
};

export default Dashboard;

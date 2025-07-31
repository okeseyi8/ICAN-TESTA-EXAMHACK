// import React from 'react'

import MainLayout from "../../layout/MainLayout/MainLayout";
import Chart from "../../components/Chart/Chart";
const Analysis = () => {
  return (
    <MainLayout>
      <div className="bg-[#f0f7ff] flex flex-col items-center h-auto py-4">
        <section className="h-76.5 w-10/12  bg-white py-6  px-15 rounded-[15px] shadow-md">
          <div className="flex gap-7 ">
            <div className="">
              <img
                className="w-19  rounded-full overflow-hidden"
                src="/images/icanprofile.png"
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
            <h2 className="font-bold text-[28px]">Foundation</h2>
            <p className="text-xl h-6.5 font-medium text-[#736B6B] bg-[#D9D9D9] flex items-center px-1.5 rounded-[15px] z-0">
              75% Completed
            </p>
          </div>
          <div className=" relative w-full bg-[#DEEDFF] h-5 rounded-[50px] mt-3">
            <div className="absolute top-0 left-0 w-7/10 h-5 rounded-[50px] bg-[#2534D7] z-10"></div>
          </div>
        </section>

        <section className="w-10/12 flex gap-4 mt-[24px]">
          <div className="w-1/2 bg-white shadow-md rounded-2xl">
            <div className="px-4 py-2">
              <div className="chart-y-text flex justify-between">
                {" "}
                <p className="font-semibold text-2xl my-1">
                  Foudation Stage Report
                </p>{" "}
                <select className="border border-[#ccc] px-2 rounded-md" name="" id="">
                    <option>
                        Pick a report
                    </option>
                    <option>
                        Foundation
                    </option>
                    <option>
                       Skill
                    </option>
                    <option>
                        Professional
                    </option>
                </select>
              </div>
              <div className="main-chart">
                <Chart />
                {/* <p>Grade</p> */}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex w-full gap-4">
              <div className="w-1/2 bg-white  h-40 px-4 py-[12px] rounded-2xl shadow-md">
                <h3 className="font-medium text-[20px]">Average Score</h3>
                <p className="font-bold text-[32px]">82%</p>
                <p className="font-medium text-xl text-[#444]">
                  +2.5% from last month
                </p>
              </div>
              <div className="w-1/2 bg-white  h-40 px-4 py-[12px] rounded-2xl shadow-md">
                <h3 className="font-medium text-[20px]">Exams Taken</h3>
                <p className="font-bold text-[32px]">5</p>
                <p className="font-medium text-xl text-[#444]">
                  Across 16 courses
                </p>
              </div>
            </div>
            <div className="w-full mt-4">
              <div className="w-full bg-white h-40 px-4 py-[12px] rounded-2xl shadow-md">
                <h3 className="font-medium text-[20px]">Improvement Rate</h3>
                <p className="font-bold text-[32px]">+5%</p>
                <p className="font-medium text-xl text-[#444]">
                  Compared to last 2months
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-10/12 bg-white mt-6 rounded-2xl shadow-md px-4 py-4">
          <h1 className="font-semibold text-2xl">Subject Breakdown</h1>
          <p className="text-[#736B6B]">Your performance in each course</p>
          <table className="w-full mt-6  border-separate border-spacing-y-3 text-sm">
            <thead>
              <tr className="text-left text-[#000] text-[18px] border-b border-[#736B6B]">
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4">Course</th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">Score</th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">
                  Performance
                </th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">Finance</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">70%</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Good</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">Business Law</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">75%</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Good</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">Management Information</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">60%</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Good</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">QTB</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">40%</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Fail</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Under Review</td>
              </tr>
             
            </tbody>
          </table>
        </section>
      </div>
    </MainLayout>
  );
};

export default Analysis;

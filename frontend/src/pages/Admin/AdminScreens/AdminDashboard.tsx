// import React from 'react'
import { BsPeople } from "react-icons/bs";
import { GoPulse } from "react-icons/go";
const AdminDashboard = () => {
  return (
    <div className="w-full px-10 py-15">
      <h2 className="font-bold text-4xl">Admin Dashboard</h2>
      <p className="font-normal text-xl text-[#444]">
        Manage exams, monitor students, and review submissions.
      </p>
      <div className="mt-6.5 flex gap-5">
        <div className="bg-white rounded-2xl px-5 py-6 w-[300px] ">
          <div className="font-medium flex justify-between items-center ">
            <h3 className="font-semibold">Active Students</h3>
            <BsPeople />
          </div>
          <h3 className="mt-8 mb-2 font-bold text-5xl">126</h3>
          <p className="font-medium text-xl text-[#444]">
            Currently taking the exam
          </p>
        </div>
        <div className="bg-white rounded-2xl px-5 py-6 w-[300px] ">
          <div className="font-medium flex justify-between items-center ">
            <h3 className="font-semibold">Pending Submissions</h3>
            <BsPeople />
          </div>
          <h3 className="mt-8 mb-2 font-bold text-5xl">117</h3>
          <p className="font-medium text-xl text-[#444]">Yet to submit</p>
        </div>
        <div className="bg-white rounded-2xl px-5 py-6 w-[300px] ">
          <div className="font-medium flex justify-between items-center ">
            <h3 className="font-semibold">Grading Submissions</h3>
            <BsPeople />
          </div>
          <h3 className="mt-8 mb-2 font-bold text-5xl">67</h3>
          <p className="font-medium text-xl text-[#444]">
            Completed and reviewed
          </p>
        </div>
        <div className="bg-white rounded-2xl px-5 py-6 w-[300px] ">
          <div className="font-medium flex justify-between items-center ">
            <h3 className="font-semibold">Flagged Exams</h3>
            <BsPeople />
          </div>
          <h3 className="mt-8 mb-2 font-bold text-5xl">20</h3>
          <p className="font-medium text-xl text-[#444]">Under Review</p>
        </div>
      </div>
      <div className="w-full rounded-2xl p-4 bg-white shadow-md mt-4">
        <h1 className="font-bold text-3xl">Recent Activity</h1>
        <p className="text-[18px] font-light text-[#444] mb-3">
          A log of recent student and admin actions.
        </p>
        <div className="flex justify-between border-b border-[#aaa] py-3">
          <div className="flex gap-4 items-center">
            <GoPulse />
            <p className="font-medium">Adeyemi David started the exam.</p>
          </div>
          <div>
            <p>3m ago</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-[#aaa] py-3">
          <div className="flex gap-4 items-center">
            <GoPulse />
            <p className="font-medium">Adeyemi David started the exam.</p>
          </div>
          <div>
            <p>3m ago</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-[#aaa] py-3">
          <div className="flex gap-4 items-center">
            <GoPulse />
            <p className="font-medium">Adeyemi David started the exam.</p>
          </div>
          <div>
            <p>3m ago</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-[#aaa] py-3">
          <div className="flex gap-4 items-center">
            <GoPulse />
            <p className="font-medium">Adeyemi David started the exam.</p>
          </div>
          <div>
            <p>3m ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

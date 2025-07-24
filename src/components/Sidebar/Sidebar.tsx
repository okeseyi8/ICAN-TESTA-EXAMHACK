// import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    `w-full flex items-center gap-6 py-3 px-2.5 font-bold text-xl rounded-l-xl ${
      isActive
        ? "bg-[#91B5FF80] text-[#3366CC]"
        : "text-black hover:bg-[#f2f2f2]"
    }`;

  return (
    <div className="w-full h-screen py-15 pl-[50px] shadow-sm bg-white">
      <h1 className="font-bold text-[36px] orb tracking-[8px] text-[var(--primary-color)]">
        TESTA
      </h1>

      <nav className="mt-10" aria-label="Sidebar Navigation">
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink to="/admin" end className={getNavClasses}>
              <RiHome5Line />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/questions" className={getNavClasses}>
              <RiHome5Line />
              <span>Set Questions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/live-monitoring" className={getNavClasses}>
              <RiHome5Line />
              <span>Live Monitoring</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/review-submissions" className={getNavClasses}>
              <RiHome5Line />
              <span>Review Submissions</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import { IoNotifications } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex justify-between items-center h-25 bg-white py-5.5 px-12.5 ">
         <h1 className="w-9/12 font-bold text-[36px]  orb tracking-[8px] text-[var(--primary-color)] ">
            TESTA
          </h1>
          <div className="w-3/12 flex gap-12.5  items-center">
            <ul className="flex gap-25 font-bold text-6.5">
                <li   className="cursor-pointer">
                  <NavLink end className={({isActive}) => isActive ? "text-[#2534D7]" : "text-black"} to="/dashboard">
                      Dashboard

                  </NavLink>
                  
                </li>
                <li onClick={() =>  navigate("/dashboard/analysis")} className="cursor-pointer">
                  <NavLink end className={({isActive}) => isActive ? "text-[#2534D7]" : "text-black"} to="/dashboard/analysis">
                      Analysis

                  </NavLink>
                  
                  
                  </li>
                {/* <li>My Exams</li> */}

            </ul>
            <div className="relative ml-10">
                <IoNotifications className="text-[28px]"/>
                <div className="absolute text-sm font-medium text-white  flex justify-center items-center rounded-full w-4 h-4 bg-red-500 top-0 right-0">
                    5
                </div>
            </div>
          </div>
    </div>
  )
}

export default Header
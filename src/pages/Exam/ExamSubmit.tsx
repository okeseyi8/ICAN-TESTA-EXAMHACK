// import React from 'react'
import { motion } from "framer-motion";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ExamSubmit = () => {
    const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="w-full h-screen bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="w-8/10 flex flex-col justify-center pb-7.5 items-center border rounded-3xl bg-white">
          {/* ✅ Animated Check Icon */}
          <motion.div
            initial={{  rotate: -135, opacity: 0 }}
            animate={{ rotate: -360, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <IoCheckmarkCircle className="text-[355px] text-[#109618]" />
          </motion.div>

          {/* ✅ Animated Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-bold text-[36px] mt-4"
          >
            Successfully Submitted
          </motion.p>
        </div>
        <button onClick={() => navigate("/dashboard")} className="bg-[#1C0EE0] mt-15 rounded-sm text-white font-bold text-xl px-3 py-2">
          Return to Dashboard
        </button>
      </div>
    </MainLayout>
  );
};

export default ExamSubmit;

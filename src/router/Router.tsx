import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";
import ExamInstructions from "../pages/Exam/ExamInstructions";
import Exams from "../pages/Exam/Exams";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/exam-rules" element={<ExamInstructions/>} />
      <Route path="/dashboard/exam" element={<Exams />} />
    </Routes>
  );
};

export default Router;

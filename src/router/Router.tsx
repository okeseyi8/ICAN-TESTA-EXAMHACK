import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";
import ExamInstructions from "../pages/Exam/ExamInstructions";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/exam-rules" element={<ExamInstructions/>} />
    </Routes>
  );
};

export default Router;

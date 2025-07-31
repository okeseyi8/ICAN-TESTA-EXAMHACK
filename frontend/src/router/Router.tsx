import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";
import ExamInstructions from "../pages/Exam/ExamInstructions";
import Exams from "../pages/Exam/Exams";
import ExamSubmit from "../pages/Exam/ExamSubmit";
import Analysis from "../pages/Analysis/Analysis";
import Admin from "../pages/Admin/Admin";
import AdminDashboard from "../pages/Admin/AdminScreens/AdminDashboard";
import SetQuestions from "../pages/Admin/AdminScreens/SetQuestions";
import Monitoring from "../pages/Admin/AdminScreens/Monitoring";
import Review from "../pages/Admin/AdminScreens/Review";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
     <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/exam-rules" element={<ExamInstructions />} />
        <Route path="/dashboard/exam" element={<Exams />} />
        <Route path="/dashboard/exam-submitted" element={<ExamSubmit />} />
        <Route path="/dashboard/analysis" element={<Analysis />} />

       
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="questions" element={<SetQuestions />} />
          <Route path="live-monitoring" element={<Monitoring />} />
          <Route path="review-submissions" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;

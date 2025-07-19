import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;

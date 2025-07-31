import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";


const ProtectedRoute = () => {
  const user = useAuthStore((s) => s.user);

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
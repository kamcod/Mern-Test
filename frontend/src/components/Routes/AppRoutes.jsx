import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Login from "../register/login/Login";
import SignUp from "../register/signup/SignUp";
import Upgrade from "../upgrade/Upgrade";
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";

export default function AppRoutes () {
  // TODO: set Admin Panel
  return(
    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upgrade" element={<Upgrade />} />
        </Route>

{/*  //  TODO: set Admin Panel */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

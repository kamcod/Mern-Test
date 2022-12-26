import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Login from "../register/login/Login";
import SignUp from "../register/signup/SignUp";
import Upgrade from "../upgrade/Upgrade";
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";
import ProtectAdminRoutes from "../../utils/ProtectAdminRoutes";
import ChatRoom from "../chat/ChatRoom";
export default function AppRoutes () {
  return(
    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upgrade" element={<Upgrade />} />
        </Route>

        <Route path="/admin" element={<ProtectAdminRoutes />}>
           <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

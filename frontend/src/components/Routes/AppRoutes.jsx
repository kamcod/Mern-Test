import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Login from "../register/login/Login";
import SignUp from "../register/signup/SignUp";

export default function AppRoutes () {
  return(
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
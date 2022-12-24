import React, {useEffect, useState} from "react";
import AppConfig from "./AppConfig";
import {Outlet, useNavigate} from "react-router-dom";
import axios from "axios";
import AdminLogin from "../components/admin/AdminLogin";

export default function ProtectAdminRoutes() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        axios.defaults.withCredentials = true;
            axios.get(AppConfig.apis.getAllUsers)
                .then(res => {
                    if(res.status === 200){
                        setIsLoading(false);
                        setAuth(true);
                        navigate("/admin/dashboard", { replace: true });
                    }
                })
                .catch((err) => {
                    setIsLoading(false);
                    navigate("/admin/login", { replace: true });
                    console.log("error", err);
                })
    }, [navigate]);
    return (
        <>
            {isLoading && <p>Loading..........</p>}
            {!isLoading ? (
                <>
                    {auth ? <Outlet /> : <AdminLogin />}
                </>
            ) : null}
        </>
        );
}

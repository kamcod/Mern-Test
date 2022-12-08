import Login from "../components/register/login/Login";
import React, {useEffect, useState} from "react";
import AppConfig from "./AppConfig";
import GetCookieByName from "./GetCookieByName";
import {Outlet, useNavigate} from "react-router-dom";
import axios from "axios";

export default function ProtectedRoutes() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        console.log("inprotected routes component")
        const token = GetCookieByName('token');
        if(token) {
            axios.get(AppConfig.apis.getDashboardStats, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(res => {
                    if(res.status === 200){
                        setIsLoading(false);
                        setAuth(true);
                    }
                })
                .catch((err) => {
                    setIsLoading(false);
                    navigate("/login", { replace: true });
                    console.log("error")
                })
        } else {
            setIsLoading(false);
            navigate("/login", { replace: true });
        }
    }, [navigate]);
    return (
        <>
            {isLoading && <p>Loading..........</p>}
            {!isLoading ? (
                <>
                    {auth ? <Outlet /> : <Login />}
                </>
            ) : null}
        </>
        );
}

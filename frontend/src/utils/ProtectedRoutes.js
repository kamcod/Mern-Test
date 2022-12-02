import Login from "../components/register/login/Login";
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import axios from "axios";

export default function ProtectedRoutes() {
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/app/test')
            .then(res => {
                console.log("resss", res);
                if(res.status === 200){
                    setIsLoading(false);
                    setAuth(true);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log("error")
            })
    }, []);
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

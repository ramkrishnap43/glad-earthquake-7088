import { Routes, Route } from "react-router-dom";
import SignUp from "../Component/SignUp";
import Home from "../Component/Home";
import ForgetPassword from "../Component/ForgetPassword"
import Login from "../Component/Login"
import Project from "../Component/Project"

export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<ForgetPassword />}/>
            <Route path="/project" element={<Project />}/>
            

        </Routes>
    )
}
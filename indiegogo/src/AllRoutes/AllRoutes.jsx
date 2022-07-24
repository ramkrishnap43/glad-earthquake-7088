import { Routes, Route } from "react-router-dom";
import SignUp from "../Component/SignUp";
import Home from "../Component/Home";
import ForgetPassword from "../Component/ForgetPassword"
import Login from "../Component/Login"
import Project from "../Component/Project"
import Payment from "../Component/Payment";
import Order from "../Component/Order";

export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<ForgetPassword />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/payment" element={<Payment />}/>
            <Route path="/order"  element={<Order />} />
            

        </Routes>
    )
}
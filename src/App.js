import React from "react";
import { Routes, Route } from 'react-router-dom'; 
import Login from "./Login";
import Signup from "./Signup";
import PhoneVerify from "./PhoneVerify";
import Dashboard from "./Dashboard";

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="phone/verify" element={<PhoneVerify />} />
            <Route path="/dashboard" element={<Dashboard />} />
           
        </Routes>
    );
}

export default App;

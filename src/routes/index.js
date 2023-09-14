import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "../pages/registration";
import Dashboard from "../pages/dashboard";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<Registration />} />
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}
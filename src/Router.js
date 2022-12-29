import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import About from "./pages/about";
import Home from "./pages/home";
import School from "./pages/school";
import Contact from "./pages/contact";
import { Signin } from "./pages/Signin";
export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/"index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/school" element={<School />}></Route>
                <Route path="/contact" element={<Contact />}></Route>


            </Route>

            <Route path="/Sign-in" index element={ <Signin/>}></Route>

        </Routes>
        </BrowserRouter>
    )
};
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import { Signin } from "./pages/Signin";
export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>

            <Route path="/Sign-in" index element={ <Signin/>}></Route>

        </Routes>
        </BrowserRouter>
    )
};
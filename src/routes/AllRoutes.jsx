import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/homepage/Home";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

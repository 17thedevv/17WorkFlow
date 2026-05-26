import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Board from "../pages/board/Board";
import Spaces from "../pages/spaces/Spaces";
import Profile from "../pages/profile/Profile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/board" element={<Board />} />
            <Route path="/space" element={<Spaces />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes;
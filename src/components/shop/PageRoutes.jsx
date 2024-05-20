import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import DashboardAdmin from "../admin/dashboardAdmin/DashboardAdmin";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/dashboard" element={
                    <AdminProtectedRoute>
                        <DashboardAdmin />
                    </AdminProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes;
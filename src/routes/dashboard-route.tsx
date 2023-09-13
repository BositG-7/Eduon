import { Navigate, Outlet, useNavigate } from "react-router-dom";

interface DashboardRouteProps {
   allowed: boolean;
   redirectURL?: string;
}

const DashboardRoute = ({ allowed = false, redirectURL = "/" }: DashboardRouteProps) => {
   const navigete = useNavigate();

   if (allowed) return <Outlet />;

   return <Navigate to="/" />;
};

export default DashboardRoute;

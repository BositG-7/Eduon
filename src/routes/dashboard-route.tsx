import { Navigate, Outlet } from "react-router-dom";

interface DashboardRouteProps {
   allowed: boolean;
   redirectURL?: string;
}

const DashboardRoute = ({ allowed = false, redirectURL = "/" }: DashboardRouteProps) => {
   if (allowed) return <Outlet />;

   return <Navigate to={redirectURL} />;
};

export default DashboardRoute;

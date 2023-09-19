import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "pages/dashboard/user/components/sidebar";

import style from "../pages/dashboard/user/styles/panel.module.scss";

interface DashboardRouteProps {
   allowed: boolean;
   redirectURL?: string;
}

const DashboardRoute = ({ allowed = false, redirectURL = "/" }: DashboardRouteProps) => {
   const navigete = useNavigate();

   if (allowed)
      return (
         <>
            <div className={style.userPanel}>
               <Sidebar />
               <div className={style.main}>
                  <Outlet />
               </div>
            </div>
         </>
      );

   return <Navigate to="/" />;
};

export default DashboardRoute;

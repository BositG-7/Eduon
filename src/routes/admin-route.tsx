import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "pages/dashboard/teacher/components";

import style from "../pages/dashboard/user/styles/panel.module.scss";

interface AdminRouteProps {
   allowed: boolean;
   redirectURL?: string;
}

const AdminRoute = ({ allowed = false, redirectURL = "/" }: AdminRouteProps) => {
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

export default AdminRoute;

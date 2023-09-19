import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "pages/dashboard/user/components/sidebar";

import style from "../pages/dashboard/user/styles/panel.module.scss";

interface UserRouteProps {
   allowed: boolean;
   redirectURL?: string;
}

const UserRoute = ({ allowed = false, redirectURL = "/" }: UserRouteProps) => {
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

export default UserRoute;

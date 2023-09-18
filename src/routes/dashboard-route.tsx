import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "pages/dashboard/user/components/navbar";
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
                  <div className={style.kurslarim}>
                     <Navbar
                        links={[
                           { link: "/", label: "Barchasi" },
                           { link: "/", label: "Progresdagi" },
                           { link: "/", label: "Saqlangan" },
                           { link: "/", label: "Tugatilgan" }
                        ]}
                     />
                  </div>
                  <Outlet />
               </div>
            </div>
         </>
      );

   return <Navigate to="/" />;
};

export default DashboardRoute;

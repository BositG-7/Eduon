import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mantine/core";
import { Sidebar } from "pages/dashboard/teacher/components";

import style from "../pages/dashboard/user/styles/panel.module.scss";

interface AdminRouteProps {
   allowed: boolean;
   redirectURL?: string;
}

const AdminRoute = ({ allowed = false, redirectURL = "/" }: AdminRouteProps) => {
   const navigate = useNavigate();

   if (allowed)
      return (
         <>
            <div className={style.userPanel}>
               <Box sx={{ borderRight: "0.5px solid rgba(118, 118, 118, 1)" }}>
                  <Sidebar />
               </Box>
               <div className={style.main}>
                  <Outlet />
               </div>
            </div>
         </>
      );

   return <Navigate to={redirectURL} />;
};

export default AdminRoute;

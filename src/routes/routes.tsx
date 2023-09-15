import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";
import SinglePageCourse from "pages/application/kurslar/single-page-course/single-course-page";
import { TeacherPanel, UserPanel } from "pages/dashboard";
import SingleKurs from "pages/dashboard/user/pages/kurslarim/components/single-kurs";
import { getSessionReset, getSessionVerfication } from "services/store";

import AuthProtected from "./auth-protected";
import DashboardRoute from "./dashboard-route";

const Routes = () => {
   const { user } = useAuth();

   const verfication = getSessionVerfication().email;
   const reset = getSessionReset().email;

   console.log(user);
   console.log(window.location.pathname);

   return (
      <Switch>
         <Route path="" element={<Application.BoshSahifa />} />
         <Route path="kurslar" element={<Application.Kurslar />} />
         <Route path="kurslar/kurs/:kursID" element={<SinglePageCourse />} />
         <Route path="faq" element={<Application.Faq />} />
         <Route path="biz-haqimizda" element={<Application.BizHaqimizda />} />

         {/* AUTH */}
         <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
            <Route path="login" element={<Auth.Login />} />
            <Route path="register" element={verfication ? <Auth.Register /> : <Navigate to="/auth/verification" />} />
            <Route path="checkpassword" element={verfication ? <Auth.Checkpassword /> : <Navigate to="/auth/verification" />} />
            <Route path="resetemail" element={<Auth.Reset.ResetEmail />} />
            <Route path="resetpassword" element={reset ? <Auth.Reset.ResetPassword /> : <Navigate to="/auth/resetemail" />} />
            <Route path="verification" element={<Auth.Verification />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         {/* Dashboard */}
         <Route path="dashboard" element={<DashboardRoute allowed={!!user} redirectURL="/" />}>
            <Route path="user" element={user?.isSpiker ? <TeacherPanel /> : <UserPanel />} />
            <Route path="user/kurs/:adminKursSingle" element={<SingleKurs />} />

            <Route path="*" index element={<Navigate to="/dashboard/user" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

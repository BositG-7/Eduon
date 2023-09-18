import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";
// eslint-disable-next-line import/no-named-as-default
import SinglePageCourse from "pages/application/kurslar/single-page-course/single-course-page";
import SinglePageSpeaker from "pages/application/kurslar/single-page-speaker/single-page-speaker";
import { Hisobim } from "pages/dashboard/user/pages";
import CourseCreate from "pages/dashboard/user/pages/create-course/create-course";
import SingleKurs from "pages/dashboard/user/pages/kurslarim/components/single-kurs";
import Kurslarim from "pages/dashboard/user/pages/kurslarim/kurslarim";
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
         <Route path="kurslar/speaker/:speakerID" element={<SinglePageSpeaker />} />
         <Route path="faq" element={<Application.Faq />} />
         <Route path="biz-haqimizda" element={<Application.BizHaqimizda />} />
         <Route path="top-courses" element={<Application.TopCourses />} />
         <Route path="new-courses" element={<Application.NewCoursess />} />
         <Route path="speakers" element={<Application.Speakerss />} />

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
         <Route path="dashboard/user" element={<DashboardRoute allowed={!user?.isSpiker} redirectURL="/" />}>
            <Route path="hisobim" element={<Hisobim />} />
            <Route path="kurslarim" element={<Kurslarim />} />
            <Route path="kurs-qoshish" element={<CourseCreate />} />

            <Route path="kurs/:adminKursSingle" element={<SingleKurs />} />

            <Route path="*" index element={<Navigate to="/dashboard/user" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

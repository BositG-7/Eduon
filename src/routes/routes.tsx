import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";
import SinglePageCourse from "pages/application/courses/single-page-course/single-course-page";
import SinglePageSpeaker from "pages/application/courses/single-page-speaker/single-page-speaker";
import { MyCoursesList } from "pages/dashboard/teacher/pages";
import Finance from "pages/dashboard/teacher/pages/finance";
import Informations from "pages/dashboard/teacher/pages/informations";
import ProfileTeacher from "pages/dashboard/teacher/pages/profile/profile";
import { MyAccount } from "pages/dashboard/user/pages";
import CourseCreate from "pages/dashboard/user/pages/create-course/create-course";
import SingleCourse from "pages/dashboard/user/pages/my-courses/components/single-course";
import MyCourses from "pages/dashboard/user/pages/my-courses/my-courses";
import ProfileUser from "pages/dashboard/user/pages/profile/profile";
import { getSessionReset, getSessionVerification } from "services/store";

import AdminRoute from "./admin-route";
import AuthProtected from "./auth-protected";
import UserRoute from "./user-route";

const Routes = () => {
   const { user } = useAuth();

   console.log(user);

   const verification = getSessionVerification().email;
   const reset = getSessionReset().email;

   return (
      <Switch>
         <Route path="" element={<Application.Home />} />

         <Route path="courses" element={<Application.Courses />} />
         <Route path="courses/course/:courseID" element={<SinglePageCourse />} />
         <Route path="courses/speaker/:speakerID" element={<SinglePageSpeaker />} />
         <Route path="courses/speaker/:speakerID" element={<SinglePageSpeaker />} />
         <Route path="question" element={<Application.Question />} />
         <Route path="about" element={<Application.About />} />
         <Route path="top-courses" element={<Application.TopCourses />} />
         <Route path="new-courses" element={<Application.NewCourses />} />
         <Route path="speakers" element={<Application.Speakers />} />
         <Route path="shartlar" element={<Application.Shartlar />} />

         {/* AUTH */}
         <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
            <Route path="login" element={<Auth.Login />} />
            <Route path="register" element={verification ? <Auth.Register /> : <Navigate to="/auth/verification" />} />
            <Route path="check-password" element={verification ? <Auth.CheckPassword /> : <Navigate to="/auth/verification" />} />
            <Route path="reset-email" element={<Auth.Reset.ResetEmail />} />
            <Route path="reset-password" element={reset ? <Auth.Reset.ResetPassword /> : <Navigate to="/auth/reset-email" />} />
            <Route path="verification" element={<Auth.Verification />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         {/* Dashboard */}
         <Route path="dashboard/user" element={<UserRoute allowed={!user?.isSpiker} redirectURL="/" />}>
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="create-course" element={<CourseCreate />} />
            <Route path="profile" element={<ProfileUser />} />

            <Route path="course/:adminCourseSingle" element={<SingleCourse />} />

            <Route path="*" index element={<Navigate to="/dashboard/user/my-courses" />} />
         </Route>

         <Route path="dashboard/teacher" element={<AdminRoute allowed={!!user?.isSpiker} redirectURL="/dashboard/user" />}>
            <Route path="my-courses" element={<MyCoursesList />} />
            <Route path="informations" element={<Informations />} />
            <Route path="finance" element={<Finance />} />
            <Route path="profile" element={<ProfileTeacher />} />

            <Route path="*" index element={<Navigate to="/dashboard/teacher/my-courses" />} />
         </Route>

         <Route
            path="dashboard"
            element={
               // eslint-disable-next-line no-nested-ternary
               user ? user.isSpiker ? <Navigate to="/dashboard/teacher" /> : <Navigate to="/dashboard/user" /> : <Navigate to="/auth/login" />
            }
         />

         <Route path="*" element={<Navigate to={user ? "/dashboard" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

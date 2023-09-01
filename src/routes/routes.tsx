import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";
import {  getSessionVerfication } from "services/store";

import AuthProtected from "./auth-protected";

const Routes = () => {
   const { user } = useAuth();

   const verfication = getSessionVerfication().email;


   return (
      <Switch>
         <Route path="" element={<Application.BoshSahifa />} />
         <Route path="kurslar" element={<Application.Kurslar />} />

         {/* AUTH */}
         <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
            <Route path="login" element={<Auth.Login />} />
            <Route
               path="register"
               element={verfication ? <Auth.Register /> : <Navigate to="/auth/verification" />}
            />
            <Route path="checkpassword" element={<Auth.Checkpassword />} />
            <Route path="resetemail" element={<Auth.Reset.ResetEmail />} />
            <Route path="resetpassword" element={<Auth.Reset.ResetPassword  />} />
            <Route path="verification" element={<Auth.Verification />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

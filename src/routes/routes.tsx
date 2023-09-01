import React, { useState } from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";
import { getSessionReset, getSessionVerfication } from "services/store";

import AuthProtected from "./auth-protected";

const Routes = () => {
   const { user, verfication, isResetPassword } = useAuth();

   const [emailVerfication, setemailVerfication] = useState(getSessionVerfication());
   const [emailReset, setReset] = useState(getSessionReset());

   return (
      <Switch>
         <Route path="" element={<Application.BoshSahifa />} />
         <Route path="kurslar" element={<Application.Kurslar />} />

         {/* AUTH */}
         <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
            <Route path="login" element={<Auth.Login />} />
            <Route
               path="register"
               element={
                  verfication && isResetPassword ? (
                     <Auth.Register email={emailVerfication} />
                  ) : (
                     <Navigate to="/auth/verification" />
                  )
               }
            />
            <Route path="checkpassword" element={<Auth.Checkpassword  />} />
            <Route path="resetemail" element={<Auth.Reset.ResetEmail />} />
            <Route path="resetpassword" element={<Auth.Reset.ResetPassword email={emailReset} />} />
            <Route path="verification" element={<Auth.Verification />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

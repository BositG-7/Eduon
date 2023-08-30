import React, { useState } from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";

import AuthProtected from "./auth-protected";

const Routes = () => {
   const { user, verfication, isResetPassword } = useAuth();

   const [email, setS] = useState("");

   const setEmail = (newEmail: string) => {
      setS(newEmail);
   };

   console.log(user);

   console.log(verfication);

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
                     <Auth.Register email={email} />
                  ) : (
                     <Navigate to="/auth/verification" />
                  )
               }
            />
            <Route path="checkpassword" element={<Auth.Checkpassword email={email} />} />
            <Route path="resetemail" element={<Auth.Reset.ResetEmail setEmail={setEmail} />} />
            <Route path="resetpassword" element={<Auth.Reset.ResetPassword email={email} />} />
            <Route path="verification" element={<Auth.Verification setEmail={setEmail} />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

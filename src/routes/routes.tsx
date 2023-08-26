import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth } from "pages";

import AuthProtected from "./auth-protected";

const Routes = () => {
   const { user, verfication } = useAuth();

   console.log(user);

   return (
      <Switch>
         <Route path="" element={<Application />} />

         {/* AUTH */}
         <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
            <Route path="login" element={<Auth.Login />} />
            <Route
               path="register"
               element={verfication ? <Auth.Register /> : <Navigate to="/auth/verification" />}
            />
            <Route path="signup" element={<Auth.SignUp />} />
            <Route path="verification" element={<Auth.Verification />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

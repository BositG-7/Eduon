import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { Application, Auth } from "pages";

import AuthProtected from "./auth-protected";

const Routes = () => {
   const user = false;

   return (
      <Switch>
         <Route path="" element={<Application />} />

         {/* AUTH */}
         <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
            <Route path="login" element={<Auth.Login />} />
            <Route path="register" element={<Auth.Register />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
         </Route>

         <Route path="*" element={<Navigate to={user ? "/" : "/auth/login"} />} />
      </Switch>
   );
};

export default Routes;

import React from "react";
import { LoadingOverlay } from "@mantine/core";
import { clearSession } from "services/store";

import { AuthContext } from "../context";
import { IEntity } from "../types";
import useProfile from "../use-profile";

interface AuthProps {
   children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
   const [{ user, isLoading, verfication, isResetPassword }, setState] = useProfile();

   if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;

   const methods = {
      login: (user: IEntity.User) => setState(prev => ({ ...prev, user })),
      logout: () => {
         clearSession();
         setState(prev => ({ ...prev, user: null, verfication: false }));
      },
      getEmail: () => {
         setState(prev => ({ ...prev, verfication: true }));
      },
      getPassword: () => {
         setState(prev => ({ ...prev, isResetPassword: true }));
      }
   };

   return (
      <AuthContext.Provider value={{ user, isLoading, methods, verfication, isResetPassword }}>
         {children}
      </AuthContext.Provider>
   );
};

export default Auth;

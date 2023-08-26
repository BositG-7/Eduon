import React from "react";
import { LoadingOverlay } from "@mantine/core";
import { clearSession } from "utils";

import { AuthContext } from "../context";
import { IEntity } from "../types";
import useProfile from "../use-profile";

interface AuthProps {
   children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
   const [{ user, isLoading, verfication }, setState] = useProfile();

   if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;

   const methods = {
      login: (user: IEntity.User) => setState(prev => ({ ...prev, user })),
      logout: () => {
         clearSession();
         setState(prev => ({ ...prev, user: null, verfication: false }));
      },
      setEmail: () => {
         setState(prev => ({ ...prev, verfication: true }));
      }
   };

   return (
      <AuthContext.Provider value={{ user, isLoading, methods, verfication }}>
         {children}
      </AuthContext.Provider>
   );
};

export default Auth;

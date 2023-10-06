import React, { Dispatch, SetStateAction, useEffect } from "react";
import { getSession } from "services/store";

import { Api, Mappers, Types } from ".";

interface State {
   isLoading: boolean;
   user: Types.IEntity.User | null;
   verification: boolean;
   isResetPassword: boolean;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
   const { access } = getSession();
   const { refresh } = getSession();
   const [state, setState] = React.useState<State>({ isLoading: !!access, user: null, verification: false, isResetPassword: true });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Profile();

            console.log(data);

            const user = Mappers.User(data);

            setState({ user, isLoading: false, verification: true, isResetPassword: true });
         } catch (err: any) {
            setState({ user: null, isLoading: false, verification: false, isResetPassword: true });
         }
      };

      if (access) request();
   }, []);

   return [state, setState];
};

export default useProfile;

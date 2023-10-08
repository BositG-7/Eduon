import React, { Dispatch, SetStateAction, useEffect } from "react";
import { getSession } from "services/store";

import { Api, Mappers, Types } from ".";

interface State {
   isLoading: boolean;
   user: Types.IEntity.User | null;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
   const { access } = getSession();
   const { refresh } = getSession();
   const [state, setState] = React.useState<State>({ isLoading: !!access, user: null });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Profile();

            console.log(data);

            const user = Mappers.User(data);

            setState({ user, isLoading: false });
         } catch (err: any) {
            setState({ user: null, isLoading: false });
         }
      };

      if (access) request();
   }, []);

   return [state, setState];
};

export default useProfile;

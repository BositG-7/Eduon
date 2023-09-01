import React, { Dispatch, SetStateAction, useEffect } from "react";
import { getSession } from "services/store";

import { Api, Mappers, Types } from ".";


interface State {
   isLoading: boolean;
   user: Types.IEntity.User | null;
   verfication:boolean
   isResetPassword:boolean
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
   const { access } = getSession();
   const [state, setState] = React.useState<State>({ isLoading: !!access, user: null,verfication:false,isResetPassword:true });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Profile();

        console.log(data);
        
        const user = Mappers.User(data);

            setState({ user, isLoading: false,verfication:true,isResetPassword:true });
         } catch (err: any) {
       
            setState({ user: null, isLoading: false,verfication:false,isResetPassword:true });
         }
      };

      if (access) request();
   }, []);

   return [state, setState];
};

export default useProfile;

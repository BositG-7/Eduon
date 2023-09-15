import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useList = () => {
   const [state, setState] = useState<Types.IQuery.Course.List>({ isLoading: true, course: [] });
   

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.List();
            const course = data;

            setState({ course, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ course: [], isLoading: false });
         }
      };

      request();
   }, []);
   return state;
};

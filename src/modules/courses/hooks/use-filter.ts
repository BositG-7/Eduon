import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useFilter = (price:any) => {
   const [state, setState] = useState<Types.IQuery.Course.Filter>({ isLoading: true, course: null });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.Filter({max_price: price});
            const course = data;

            setState({ course, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ course: null, isLoading: false });
         }
      };

      request();
   }, []);
   return state;
};
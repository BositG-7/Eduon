import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useSingle = (id: string) => {
   const [state, setState] = useState<Types.IQuery.Course.Single>({ isLoading: true, course: [] });

   useEffect(() => {
      const request = async () => {
         try {

            const { data } = await Api.Course.Single(id);
            const course = data;

            // @ts-ignore
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

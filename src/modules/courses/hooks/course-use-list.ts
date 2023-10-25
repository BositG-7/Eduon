import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

interface UseList {
   search?: string;
}
export const useList = ({ search = "" }: UseList) => {
   const [state, setState] = useState<Types.IQuery.Course.List>({ isLoading: true, course: null });

   useEffect(() => {
      const request = async () => {
         try {
            console.log(search);

            const { data } = await Api.Course.List({ search });
            const course = data;

            setState({ course, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ course: null, isLoading: false });
         }
      };

      request();
   }, [search]);

   return state;
};

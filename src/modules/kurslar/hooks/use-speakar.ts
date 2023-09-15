import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useSpeaker = (id: string) => {
   const [state, setState] = useState<Types.IQuery.Course.Speaker>({ isLoading: true, teacher: [] });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.Speaker(id);
            const teacher = data;

            // @ts-ignore
            setState({ teacher, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ teacher: [], isLoading: false });
         }
      };

      request();
   }, []);
   return state;
};

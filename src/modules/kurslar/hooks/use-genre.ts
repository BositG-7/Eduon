import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useGenre = () => {
   const [state, setState] = useState<Types.IQuery.Course.Genre>({ isLoading: true, genre: [] });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.Genre();
            const genre = data;

            // @ts-ignore
            setState({ genre, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ genre: [], isLoading: false });
         }
      };

      request();
   }, []);
   return state;
};

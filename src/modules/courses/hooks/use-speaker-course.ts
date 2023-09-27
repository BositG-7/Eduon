import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useSpeakerCourse = (id: number | string) => {
   const [state, setState] = useState<Types.IQuery.Course.SpeakerCourse>({ isLoading: true, speakerCourse: [] });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.SpeakerCourse(id);
            const speakerCourse = data;

            // @ts-ignore
            setState({ speakerCourse, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ speakerCourse: [], isLoading: false });
         }
      };

      request();
   }, [id]);
   return state;
};
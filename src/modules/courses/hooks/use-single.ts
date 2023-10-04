import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { IApi } from "../types";
import { Api } from "..";

export const useSingle = (id: string) => {
   const [course, setState] = useState<IApi.Course.Single.Response>({
      name: "",
      description: "",
      speaker: 0,
      comment: { text: "", course: 0, author: 0 },
      video: { video: "", module: 0 }
   });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.Single(id);
            const course = data;

            setState(course);
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({
               name: "",
               description: "",
               speaker: 0,
               comment: { text: "", course: 0, author: 0 },
               video: { video: "", module: 0 }
            });
         }
      };

      request();
   }, []);
   return course;
};

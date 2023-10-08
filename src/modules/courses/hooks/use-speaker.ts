import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { IApi } from "../types";
import { Api } from "..";

export const useSpeaker = (id: number | string) => {
   const [teacher, setState] = useState<IApi.Course.Speaker.Response>({ first_name: "", last_name: "", email: "", speaker: "", image: "" });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.Speaker(id);
            const teacher = data;

            setState(teacher);
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ first_name: "", last_name: "", email: "", speaker: "", image: "" });
         }
      };

      request();
   }, [id]);
   return teacher;
};

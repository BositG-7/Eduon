import http from "services/http";

import { IApi } from "./types";

export const Course = {
   List: () => http.get<IApi.Course.List.Response>("/course_new"),
   
   Single: (id : string) =>
   http.get<IApi.Course.Single.Response>(`/course_detail/${id}`),

   Speaker: (id : string) =>
   http.get<IApi.Course.Speaker.Response>(`/speaker_profile/${id}`)
};

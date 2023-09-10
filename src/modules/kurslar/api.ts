import http from "services/http";

import { IApi } from "./types";

export const Course = {
   List: () => http.get<IApi.Course.List.Response>("/course_new")
};

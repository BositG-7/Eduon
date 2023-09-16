import http from "services/http";
import { objectToFormData } from "utils";

import { IApi } from "./types";

export const Course = {
   List: () => http.get<IApi.Course.List.Response>("/course_new")
};

export const CreateCourse = ({ ...params }: IApi.Course.Create.Request) =>
   http.post<IApi.Course.Create.Response>("/course_create", objectToFormData({ ...params }));
import http from "services/http";
import { objectToFormData } from "utils";

import { IApi } from "./types";

export const Course = {
   List: () => http.get<IApi.Course.List.Response>("/course_new"),

   Single: (id: string) => http.get<IApi.Course.Single.Response>(`/course_detail/${id}`),

   Speaker: (id: any) => http.get<IApi.Course.Speaker.Response>(`/speaker_profile/${id}`),
   SpeakerCourse: (id: any) => http.get<IApi.Course.SpeakerCourse.Response>(`/speaker_course_list/${id}`),
   Category: () => http.get<IApi.Course.Category.Response>(`/category`)
};

export const CreateCourse = (formData: IApi.Course.Create.Request) =>
   http.post<IApi.Course.Create.Response>("/course_create/", objectToFormData(formData));
export const CourseTop = () => http.get("/course_top");

export const CourseNew = () => http.get("/course_new");

export const VideoUpload = (formData: IApi.Course.VideoUpload.Request) => 
http.post<IApi.Course.VideoUpload.Response>("/speaker_video_upload", objectToFormData(formData));

export const TopSpeaker = () => http.get("/speaker_top");

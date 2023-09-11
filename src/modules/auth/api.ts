/* eslint-disable no-useless-catch */
import http from "services/http";
import { objectToFormData } from "utils";

import { IApi } from "./types";

export const Register = ({ ...params }: IApi.Register.Request) =>
   http.post<IApi.Register.Response>("/user/register", objectToFormData({ ...params }));

export const Login = ({ ...params }: IApi.Login.Request) =>
   http.post<IApi.Login.Response>("/user/token", objectToFormData({ ...params }));

export const Profile = () => http.get("/user/me");
export const SendEmail = ({ ...params }: IApi.SendEmail.Request) =>
   http.post("/user/send-email", objectToFormData({ ...params }));
export const ResetPassword = ({ ...params }: IApi.ResetPassword.Request) =>
   http.patch("/user/reset-passwd-confirm", objectToFormData({ ...params }));

export const Checkpassword = ({ email, activation_code }: IApi.Checkpassword.Request) =>
   http.post("/user/check-activate-code", objectToFormData({ email, activation_code }));
export const ResetEmaill = ({ ...params }: IApi.ResetEmail.Request) =>
   http.post("/user/reset-passwd", objectToFormData({ ...params }));

export const CourseTop = () => http.get("/course_top");

export const CourseNew = () => http.get("/course_new");

export const TopSpeaker = () => http.get("/speaker_top");
export const RefleshToken = ({refresh  }:IApi.Refresh.Request)=>{
  http.post("/user/token/refresh",{refresh})
}
       
    

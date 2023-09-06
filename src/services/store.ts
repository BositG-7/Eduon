import store from "store2";
import config from "config";
import { Types } from "modules/auth";
import { IApi } from "modules/auth/types";

export const getSession = (): Types.IEntity.Tokens => store.get(config.api.sessionKEY) || {};

export const clearSession = () => store.remove(config.api.sessionKEY)!;

export const setSession = (tokens: Types.IEntity.Tokens) => store.set(config.api.sessionKEY, tokens);

export const getSessionVerfication = (): Types.IEntity.Tokens => store.get("verfication") || {};

export const clearSessionVerfication = () => store.remove("verfication")!;

export const setSessionVerfication  = (email: IApi.SendEmail.Request) => store.set("verfication", email);

export const getSessionReset= (): Types.IEntity.Tokens => store.get("resetemail") || {};

export const clearSessionReset= () => store.remove("resetemail")!;

export const setSessionReset = (email: IApi.SendEmail.Request) => store.set("resetemail", email);

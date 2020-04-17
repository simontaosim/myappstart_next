import { IAppMessage } from "../reducers/interfaces";

export interface  IActionPayload {
    [x:string]: string | boolean | number;
}
export interface IUserFormAction {
    type: number;
    payload?: IActionPayload
}

export interface IUserProfileAction{
    type: number;
    payload?: IActionPayload
}

export interface IPostListAction {
    type: number;
    payload?: any,
}

export interface IAppAction{
    type: number;
    payload?: IActionPayload | IAppMessage
}

export interface IUserProfileAction {
    type: number;
    payload?: IActionPayload 
}

import { IAppAction } from "./interfaces";
import { AppActionNames } from "./enums";
import { IAppMessage } from "../reducers/interfaces";

export function checkLogined(): IAppAction{
    return {
        type: AppActionNames.CHECK_LOGIN,
    }
}

export function login(): IAppAction {
    return {
        type: AppActionNames.LOGINED
    }
}

export function logout(): IAppAction {
    return {
        type: AppActionNames.UNLOGINED
    }
}

export function popMsg(payload: IAppMessage): IAppAction {
    return {
        type: AppActionNames.POP_MESSAGE,
        payload
    }
}

export function closeMsg(): IAppAction {
    return {
        type: AppActionNames.CLOSE_MESSAGE,
    }
}
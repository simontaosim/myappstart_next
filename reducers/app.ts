import { IAppState, IAppMessage } from "./interfaces";
import { IAppAction } from "../actions/interfaces";
import { AppActionNames } from "../actions/enums";

export function appReducer(state: IAppState, action: IAppAction): IAppState {
    switch (action.type) {
        case AppActionNames.CHECK_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case AppActionNames.LOGINED:
            return {
                ...state,
                isLogined: true,
                loading: false,
            }
        case AppActionNames.UNLOGINED:
            return {
                ...state,
                isLogined: false,
                loading: false,
            }
        case AppActionNames.POP_MESSAGE:
            return {
                ...state,
                message: {
                    ...action.payload as IAppMessage,
                    open: true,
                }
            }
        case AppActionNames.CLOSE_MESSAGE:
            return {
                ...state,
                message: {
                    ...state.message as IAppMessage,
                    open: false,
                }
            }
        default:
            return state;
    }
}
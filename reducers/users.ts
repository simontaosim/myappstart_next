import {  IUserFormAction, IUserProfileAction } from "../actions/interfaces";
import { FormActionNames, UserProfileActionNames } from "../actions/enums";
import { IUserFormState, IUserProfileState } from "./interfaces";

export function loginUserReducer(state: IUserFormState, action:IUserFormAction): IUserFormState{
    switch (action.type) {
        case FormActionNames.CHANGE_FIELD_VALUE:
            return {
                ...state,
                ...action.payload,
                usernameError: false,
                usernameErrorReason: "",
                passwordError: false,
                passwordErrorReason: "",
                passwordRepeatError: false,
                passwordRepeatErrorReason: ""
            }
        case FormActionNames.SUBMIT_FORM:
            return {
                ...state,
                submitting: true, 
            }

        case FormActionNames.REGISTER_FAIL:
            return {
                ...state,
                submitting: false,
                ...action.payload
            }
        case FormActionNames.REGISTER_SUCCESS:
            return {
                ...state,
                submitting: false,
            }
        case FormActionNames.LOGIN_FAIL:
            return {
                ...state,
                submitting:false,
                ...action.payload,
            }
        case FormActionNames.LOGIN_SUCCESS:
            return {
                ...state,
                submitting:false,
                ...action.payload
            }
        default:
            return state;
    }
}

export function userProfileReducer
(state: IUserProfileState, action: IUserProfileAction): IUserProfileState{
    switch (action.type) {
        case UserProfileActionNames.GET:
            return {
                ...state,
                loading: true,
            }
        case UserProfileActionNames.UPDATE:
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
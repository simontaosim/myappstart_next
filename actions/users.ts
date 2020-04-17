import { IActionPayload, IUserFormAction } from "./interfaces";
import { FormActionNames } from "./enums";

export function changeInputField(payload: IActionPayload): IUserFormAction{
    return {
        type: FormActionNames.CHANGE_FIELD_VALUE,
        payload,
    }
}

export function submit(): IUserFormAction{
    return {
        type: FormActionNames.SUBMIT_FORM,
    }
}

export function registerFail(payload: IActionPayload): IUserFormAction{
    return {
        type: FormActionNames.REGISTER_FAIL,
        payload,
    }
}

export function loginFail(payload: IActionPayload): IUserFormAction{
    return {
        type: FormActionNames.LOGIN_FAIL,
        payload,
    }
}

export function loginSuccess():IUserFormAction {
    return {
        type: FormActionNames.LOGIN_SUCCESS,
    }
}

export function registerSuccess(): IUserFormAction{
    return {
        type: FormActionNames.REGISTER_SUCCESS,
    }
}


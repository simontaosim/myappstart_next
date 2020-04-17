import { IActionPayload, IUserProfileAction } from "./interfaces";
import { UserProfileActionNames } from "./enums";

export function getProfile(): IUserProfileAction{
    return {
        type: UserProfileActionNames.GET,
    }
}

export function updateProfile(payload: IActionPayload): IUserProfileAction{
    return {
        type: UserProfileActionNames.UPDATE,
        payload,
    }
}
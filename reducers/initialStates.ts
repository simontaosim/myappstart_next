import { IUserFormState, IAppState, IUserProfileState, IPostListState } from "./interfaces";

export const userFormState: IUserFormState = {
    username: "",
    password: "",
    passwordRepeat: "",
    submitting: false,
    usernameError: false,
    usernameErrorReason: '',
    
}

export const appState: IAppState = {
    isLogined: false,
    loading: true,
    message: {
        open: false,
        severity: "info",
        content: "加載中"
    },
   
}

export const userProfileState: IUserProfileState = {
    userId: null,
    username: "",
    avatar: "",
    personalStatus: "",
    sex: "",
    loading: false,
}

export const postListState: IPostListState = {
    list: [],
    loading: false,
}

export interface IUserFormState {
    username?: string;
    usernameError?: boolean;
    usernameErrorReason?: string;
    password?: string;
    passwordError?: boolean;
    passwordErrorReason?: string;
    passwordRepeatError?: boolean;
    passwordRepeat?: string;
    passwordRepeatErrorReason?: string;
    submitting?: boolean,
}

export interface IAppMessage {
    severity: "success" | "info" | "warning" | "error" | undefined,
    content: string,
}

export interface IAppMessageState extends IAppMessage {
    open: boolean,
}
export interface IUserProfileState {
    userId: number | null,
    username: string,
    avatar: string,
    personalStatus: string,
    sex: string,
    loading: boolean
}

export interface IAppState {
    isLogined: boolean,
    loading: boolean,
    message: IAppMessageState,
}

export interface IPostState {
    title:string, 
    bodyBrief:string,
    body:string,
    username: string,
    avatar: string | null,
    status: "submitting" | "success" | "done",
    id: number | null,
    authorId: number | null,
    createdDate: string | null,
}

export interface IPostListState {
    loading: boolean,
    list: Array<IPostState>,
}
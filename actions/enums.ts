export   enum FormActionNames {
    CHANGE_FIELD_VALUE,
    SUBMIT_FORM,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
}

export  enum AppActionNames {
    CHECK_LOGIN,
    LOGINED,
    UNLOGINED,
    POP_MESSAGE,
    CLOSE_MESSAGE,
}

export enum PostActionNames {
    CREATE,
    CREATE_SUCCESS,
    CREATE_FAIL,
    DELETE,
    DELETE_SUCCESS,
    DELETE_FAIL,
    GET_ONE,
    LIST,
    LIST_SUCCESS,
    LIST_FAIL,
    UPDATE_ONE,
}

export enum UserProfileActionNames {
    GET,
    UPDATE,
    UPDATE_AVATAR,
    UPDATE_AVATAR_SUCCESS,
    UPDATE_SUCCESS,
}
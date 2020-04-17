import { IAppState, IAppMessageState, IPostState, IUserProfileState } from "../reducers/interfaces";
import { NextRouter } from "next/router";
import { Dispatch } from "react";
import { IAppAction, IPostListAction } from "../actions/interfaces";

export interface IUserStatus {
    isLogined: boolean,
    userId: number,
    roles: [],
}

export interface IPageProps {
    appState: IAppState,
    appDispatch: Dispatch<IAppAction>
}


export interface ICreatePostProps {
    user: IUserProfileState,
    appDispatch:  Dispatch<IAppAction>,
    dispatch: Dispatch<IPostListAction>
}

export interface IOverallMessageProps extends IAppMessageState {
    appDispatch: Dispatch<IAppAction>,
   
}

export interface IPageComponentProps  extends IPageProps{
    router?: NextRouter,
    user: IUserProfileState,

}

export interface IRegisterPageProps extends IPageComponentProps {
}
export interface IWelcomePageProps extends IPageComponentProps {
    posts: Array<any>;

}

export interface ILoginPageProps extends IPageComponentProps {

}

export interface IMainLayoutProps extends IPageProps {
    title: string,
    children: any,
}

export interface IPostListItemProps  {
    item: IPostState,
    key: number,
}
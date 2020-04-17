import { PostActionNames } from "./enums";
import { IPostState } from "../reducers/interfaces";

export function create(payload: IPostState){
    return {
        type: PostActionNames.CREATE,
        payload
    }
}

export function update(payload: any){
    return {
        type: PostActionNames.UPDATE_ONE,
        payload,
    }
}

export function listPost(){
    return {
        type: PostActionNames.LIST,
    }
}
export function listPostSuccess(payload: any){
    return {
        type: PostActionNames.LIST_SUCCESS,
        payload,
    }
}
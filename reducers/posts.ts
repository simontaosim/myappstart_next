import { IPostListState } from "./interfaces";
import { IPostListAction } from "../actions/interfaces";
import { PostActionNames } from "../actions/enums";

export function postsReducer(state: IPostListState, action: IPostListAction): IPostListState{
    switch (action.type) {
        case PostActionNames.CREATE:
            const new_list = state.list;
            new_list.unshift(action.payload);
            return {
                ...state,
                list: new_list,
            }
        case PostActionNames.UPDATE_ONE: 
            const index: number = action.payload.index;
            return {
                ...state,
                list: [
                    ...index!==0 ? state.list.slice(0, index-1) : [],
                    {
                        ...state.list[index],
                        ...action.payload.data,
                        status: 'success'
                    },
                    ...state.list.slice(index+1, state.list.length+1),
                ]
            }
        case PostActionNames.LIST:
            return {
                ...state,
                loading: true,
            }
        case PostActionNames.LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false,
            }
    
        default:
            return state;
    }
}
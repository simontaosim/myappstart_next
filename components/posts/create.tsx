import { TextField, Button } from "@material-ui/core";
import PostEditor from "../PostEditor";
import { useState } from "react";
import * as stripHtml from 'string-strip-html'
import { ICreatePostProps } from "../PropInterfaces";
import dataProvider from "../../services/dataProvider";
import { popMsg } from "../../actions/app";
import { create, update } from "../../actions/posts";

export function CreatePost(props: ICreatePostProps){
    const { user, appDispatch, dispatch } = props;
    const [title, setTitle ] =  useState("");
    const [body, setBody ] = useState("");
    const handleBodyChange = (body:string) => {
        setBody(body);
    }
    const handlePost = async  (_e:any )=> {
        setTitle("");
        setBody("");
        dispatch(create({
            title, body, bodyBrief: stripHtml(body) as string,
            username: user.username,
            avatar: "",
            status: "submitting",
            id: null,
            authorId: user.userId,
            createdDate: null,
        }))
        setTimeout(async ()=>{
            const createRlt = await dataProvider.create("posts", {
                title,
                body,
                cover: null,
                authorId: user.userId,
            });
            if(createRlt.code === 'resource:create:success'){
                console.log('发帖成功'); 
                appDispatch(popMsg({
                    content: '发帖成功',
                    severity: 'success',
                }));
                dispatch(update({
                    index: 0,
                    data: {
                        ...createRlt.data,
                    }
                }))       
            }else{
                appDispatch(popMsg({
                    content: '发帖失败',
                    severity: 'error',
                }))
            }
        }, 3000)
       

    }
    const allowed =( title=== "" || body === "")
    return (
        <div style={{
            maxWidth: 600,
            width: "100%",
            marginTop: 20
        }}>
            <TextField label="帖子标题" 
             fullWidth={true} variant="outlined" 
             value={title}
             onChange={(e:any) => setTitle(e.target.value)}
             />
            <PostEditor onChange={handleBodyChange} body={body}   />
            <Button disabled={allowed}
            onClick={handlePost} 
            fullWidth variant="contained" color="secondary">发表</Button>
        </div>
    )
}
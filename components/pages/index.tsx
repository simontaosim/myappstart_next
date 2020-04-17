import {   Container, Button } from "@material-ui/core"
import MainLayout from "../layouts/MainLayout"
import {   IWelcomePageProps } from "../PropInterfaces";
import PostList from "../PostList";
import { CreatePost } from "../posts/create";
import { useReducer, useEffect } from "react";
import { postsReducer } from "../../reducers/posts";
import { postListState, userProfileState } from "../../reducers/initialStates";
import Link from "next/link";
import { userProfileReducer } from "../../reducers/users";
import { getProfile, updateProfile } from "../../actions/profile";
import dataProvider from "../../services/dataProvider";
import { listPost, listPostSuccess } from '../../actions/posts';


export default function WelcomePage (props: IWelcomePageProps){
    const { appState, appDispatch} = props;
    const [state, dispatch] = useReducer(postsReducer, postListState);
    const { list, loading } = state;
    const [user, userDispatch] = useReducer(userProfileReducer, userProfileState);
    useEffect(()=>{
        dispatch(listPost());
        dataProvider.getList("posts",  {
            pagination: {
              page: 1,
              perPage: 10
            },
            sort: {
              field: "id",
              order: 'DESC'
            },
            filter: {
              
            }
          }).then((rlt: any) => {
              dispatch(listPostSuccess(rlt));
          })
    }, [])
    useEffect(()=>{
        if(appState.isLogined){
            userDispatch(getProfile());
            const userId = localStorage.getItem("userId");
            if(userId){
                dataProvider.getOne("users", {id: parseInt(userId)}).then((data:any)=>{
                    console.log(data);
                    userDispatch(updateProfile({
                        ...data,
                        userId: data.id,
                    }));
                });
               
            }
         
        }
    }, [])
  
    return (
       <MainLayout appState={appState} title={'张贴'} appDispatch={appDispatch}>
           <Container style={{
               display: 'flex',
               flexDirection: 'column',
               alignContent: 'center',
               alignItems: 'center',
           }}>
               {
                   appState.isLogined? 
                   (
                       user.userId && <div style={{
                        display: user.loading? 'none' : "flex",
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <CreatePost dispatch={dispatch}  user={user} appDispatch={appDispatch} />
                    </div>
                   )
                   :
                   <>
                   <br/>
                   <Link href='/login'>
                        <Button variant="contained" color="secondary"> 登录以发帖</Button>
                   </Link>
                   </>
                 
               }
               <div
                style={{
                    maxWidth: 600,
                    width: "100%",
                    marginTop: 20
                }}>
                    {
                        !loading &&   <PostList posts={list} />
                    }
             
               </div>
            
           </Container>
         
       </MainLayout>
    )
}
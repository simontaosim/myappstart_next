import MainLayout from "../layouts/MainLayout";
import { Typography, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import dataProvider from "../../services/dataProvider";

export default function  ShowPostPage(props:any){
    const { id, appState, appDispatch} = props;
    const [post, setPost ] = useState({} as any);
    useEffect(()=>{
        dataProvider.getOne("posts", {id}).then((data:any) => {
           setPost(data)
        })
    }, [])
    return (
       <MainLayout appState={appState} title={post.title} appDispatch={appDispatch}>
           <Container  style={{
               display: 'flex',
               flexDirection: 'column',
               alignContent: 'center',
               alignItems: 'center',
           }}>
           <Typography style={{
               textAlign: 'center'
           }}  variant="h5">{post.title}</Typography>
           <Container style={{
               width: "90%",
               padding: 10,
               maxWidth: "90%",
               wordBreak: 'break-all'
           }}   dangerouslySetInnerHTML={{__html: post.body}} 
           />
           </Container>
         
       </MainLayout>
    )

}
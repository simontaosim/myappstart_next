import {  Typography, Container } from "@material-ui/core"
import MainLayout from "../layouts/MainLayout"
import {   IWelcomePageProps } from "../PropInterfaces";


export default function PersonalPage (props: IWelcomePageProps){
    const {  appState, appDispatch, user} = props;
    
    return (
       <MainLayout appState={appState} title={'我的'} appDispatch={appDispatch}>
           <Container>
           <Typography  variant="h5">{user.username}</Typography>
           </Container>
          
       </MainLayout>
    )
}
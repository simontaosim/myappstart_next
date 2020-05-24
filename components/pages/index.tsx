import {   Container, Typography, Link } from "@material-ui/core"
import MainLayout from "../layouts/MainLayout"
import {   IWelcomePageProps } from "../PropInterfaces";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function WelcomePage (props: IWelcomePageProps){
    const { appState, appDispatch} = props;
   
  
    return (
       <MainLayout appState={appState} title={'巫力格格'} appDispatch={appDispatch}>
           <Container style={{
               display: 'flex',
               flexDirection: 'column',
               alignContent: 'center',
               alignItems: 'center',
               justifyContent: 'center',
               minHeight: 450,
           }}>
               <Typography variant="h4">
                        你好，我是Simon👋
               </Typography>
               <Typography variant="h6">
                        致力于nodejs的全栈工程师
               </Typography>
             <div>关注我的github
                 <Link href="https://github.com/simontaosim">
                 <IconButton color="primary" aria-label="https://github.com/simontaosim">
                <GitHubIcon />
            </IconButton>
                 </Link>
            
             </div>
             <div>关注我的linkin
                 <Link href="https://github.com/simontaosim">
                 <IconButton color="primary" aria-label="https://github.com/simontaosim">
                <LinkedInIcon />
            </IconButton>
                 </Link>
            
             </div>
    
            
           </Container>
         
       </MainLayout>
    )
}
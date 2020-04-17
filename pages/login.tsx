import { useRouter, NextRouter } from 'next/router';

import LoginPage from "../components/pages/login";
import { IPageProps } from '../components/PropInterfaces';


export default function(props: IPageProps){
    const {appState, appDispatch}  = props;
    const router:NextRouter = useRouter();
    return (
        <LoginPage router={router} appState={appState} appDispatch={appDispatch}  />
    )
}
import { useRouter, NextRouter } from 'next/router';

import RegisterPage from '../components/pages/register';
import { useEffect } from 'react';
import { IPageProps } from '../components/PropInterfaces';


export default function(props: IPageProps){
    const { appState, appDispatch } = props;
    const router:NextRouter = useRouter();
    useEffect(()=>{

    }, [])
    return (
        <RegisterPage 
        router={router} 
        appState={appState}  
        appDispatch={appDispatch}
        />
    )
}
import { AppContext } from "../context/AppContext";
import { useReducer, useEffect } from "react";
import { appReducer } from "../../reducers/app";
import { appState } from "../../reducers/initialStates";
import authProvider from "../../services/authProvider";
import { login, logout } from "../../actions/app";
import OverallMessage from "../OverallMessage";

export default function AppContainer(props:any){
    const [state, appDispatch] = useReducer(appReducer,  appState);
    const { message, loading } = state;

    useEffect(()=>{
        if(process.browser){
    
            authProvider.check().then((rlt:boolean) => {
                if(rlt){
                   appDispatch(login());
                }else{
                    appDispatch(logout());
                }
            })
        }
    }, []);

    return (
        <>
            <AppContext.Provider value={{
                appState: state,
                appDispatch
            }}>
                {
                   !loading && props.children
                }
                
                <OverallMessage {...message} appDispatch={appDispatch}/>
            </AppContext.Provider>
        </>
    )
}
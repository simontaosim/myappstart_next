import React from 'react';
export const AppContext = React.createContext({
    appDispatch: ()=>{},
    appState: {}
} as any)
import React from 'react';
import ReactDOM from "react-dom";
import App from 'next/app';
import Router, { withRouter } from "next/router";
import PageChange from '../components/PageChange';
import AppContainer from '../components/containers/AppContainer';
import { AppContext } from '../components/context/AppContext';

Router.events.on("routeChangeStart", () => {
    const loadElement = document.getElementById("page-transition");
    const mainElement = document.getElementById("__next");
    if (loadElement) {
        loadElement.style.height = "100%";
    }
    if (mainElement) {
        mainElement.style.height = "auto";
        mainElement.style.display = "none";
    }
    ReactDOM.render(
        <PageChange />,
        document.getElementById("page-transition")
    );
});

Router.events.on("routeChangeComplete", () => {
    const loadElement = document.getElementById("page-transition");
    const mainElement = document.getElementById("__next");
    if (loadElement) {
        loadElement.style.height = "auto";
        loadElement.style.display = "block";
        ReactDOM.unmountComponentAtNode(loadElement);
    }
    if (mainElement) {
        mainElement.style.height = "100%";
        mainElement.style.display = "block";
    }

});

class MyApp extends App {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <AppContainer>
                <AppContext.Consumer>
                    {
                        ({appState, appDispatch}:any) =>  
                        <Component  appState={appState} appDispatch={appDispatch}  {...pageProps} />
                    }
                </AppContext.Consumer>
               
            </AppContainer>
        );
    }
}
MyApp.getInitialProps = async ({ Component, router, ctx }) => {
    let pageProps: any = { router };

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, pageContent: { title: "留言版" } };
}

export default withRouter(MyApp);
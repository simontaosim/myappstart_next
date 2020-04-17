import ShowPostPage from "../../components/pages/showPostPage";

export default  function showPost(props: any){
    const { router, appState, appDispatch  } = props;
    const { id } = router.query;
  
    return (
        <ShowPostPage id={id} appDispatch={appDispatch} appState={appState} />
    )
}
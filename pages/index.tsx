import WelcomePage from '../components/pages'
import { useEffect } from 'react'
import dataProvider from '../services/dataProvider'
import { IPageProps } from '../components/PropInterfaces'
import { userProfileState } from '../reducers/initialStates'
const IndexPage = (props: IPageProps) => {
  const {appState, appDispatch } = props;
  useEffect(()=>{
    dataProvider.getList('posts', {
      pagination: {
        page: 1,
        perPage: 10
      },
      sort: {
        field: "createdDate",
        order: 'DESC'
      },
      filter: {
        
      }
    })
  })
  return (
    <WelcomePage posts={[]} appState={appState} appDispatch={appDispatch}  user={userProfileState}/>
  )
}
export default IndexPage
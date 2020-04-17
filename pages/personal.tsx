import { useEffect, useReducer } from 'react'
import dataProvider from '../services/dataProvider'
import { IPageProps } from '../components/PropInterfaces'
import PersonalPage from '../components/pages/personal'
import { useRouter } from 'next/router';
import { popMsg } from '../actions/app';
import { userProfileReducer } from '../reducers/users';
import { userProfileState } from '../reducers/initialStates';
import { getProfile, updateProfile } from '../actions/profile';
export default function (props: IPageProps) {
  const { appState, appDispatch } = props;
  const router = useRouter();
  const [user, userDispatch] = useReducer(userProfileReducer, userProfileState);
  useEffect(()=>{
    const userId = localStorage.getItem("userId");
      if (userId) {
        dataProvider.getOne("users", { id: parseInt(userId) }).then((data: any) => {
          console.log(data);
          userDispatch(updateProfile({
            ...data,
            userId: data.id,
          }));
        });

      }
  }, [])

  useEffect(() => {
    if (!appState.isLogined) {
      appDispatch(popMsg({ content: "请先登录", severity: 'warning' }))
      router.replace('/login');
      userDispatch(getProfile());

    } 
    dataProvider.getList('posts', {
      pagination: {
        page: 1,
        perPage: 10
      },
      sort: {
        field: "id",
        order: 'desc'
      },
      filter: {

      }
    })
  })
  return (
    <PersonalPage user={user} posts={[]} appState={appState} appDispatch={appDispatch} />
  )
}
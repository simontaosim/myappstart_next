import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Link from 'next/link';
import { IMainLayoutProps } from '../PropInterfaces';
import { logout } from '../../actions/app';
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default (props: IMainLayoutProps) => {
  const classes = useStyles();
  const router = useRouter();
  const { title, appState, appDispatch } = props;
  const handleLogoutButton = (_event: any) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    appDispatch(logout());
    router.replace("/login");
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Link href="/">
                <Button component='a' color="inherit">首页</Button>
              </Link>
          {
            appState.isLogined ? 
            <>
            
              <Link href="/personal">
                <Button component='a' color="inherit">我的</Button>
              </Link>
              <Button onClick={handleLogoutButton} component='button' color="inherit">登出</Button>
            </> 
            :<>
            
              <Link href="/login">
                <Button component='a' color="inherit">登录</Button>
              </Link>
            </>
          }

        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      <br/>
      <br/>
      {props.children}
    </>
  )
}
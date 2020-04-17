import React, { FormEvent, useReducer } from 'react';
import MainLayout from '../layouts/MainLayout';
import { ILoginPageProps } from '../PropInterfaces';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import { makeStyles, Button } from '@material-ui/core';
import Link from 'next/link';
import authProvider from '../../services/authProvider';
import { loginUserReducer } from '../../reducers/users';
import { userFormState } from '../../reducers/initialStates';
import { changeInputField, loginFail, submit, loginSuccess } from '../../actions/users';
import { login, popMsg } from '../../actions/app';


const useStyles = makeStyles((_theme:any) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: "100%",
      maxWidth: 450,
      justifyContent: 'space-around',
      alignItems: 'center',
      minHeight: 300,
      maxHeight: 600
    },
    formItem: {
        width: "100%"
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
  }));

export default function LoginPage (props: ILoginPageProps) {
    const {router, appState, appDispatch} = props;
    const classes = useStyles();
    const [state, dispatch] = useReducer(loginUserReducer, userFormState);
    const handleInputChange = (event: any, fieldName:string) => {
        const value = event.target.value;
        const field:any = {};
        field[fieldName] = value;
        dispatch(changeInputField(field));

    }
    const handleSubmit = async  (event: FormEvent) => {
        event.preventDefault();
        if(!state.username){
           return  dispatch(loginFail({usernameErrorReason: "用户名不得为空", usernameError: true}));
        }

        if(!state.password){
            return dispatch(loginFail({passwordErrorReason: "密码不得为空", passwordError: true}));
        }

       

        dispatch(submit());
       const rlt = await  authProvider.login({
            username: state.username as string,
            password:  state.password as string,
        })
        console.log(rlt);
     
        if(rlt.code === 'user:login.success'){
            dispatch(loginSuccess());
            appDispatch(login());
            appDispatch(popMsg({content: "登录成功", severity: 'success'}));
            if(router){
                router.push("/");
            }
        }
        if(rlt.code.includes('auth:fail')){
            appDispatch(popMsg({content: "密码或者用户名错误", severity: 'error'}));
            dispatch(loginFail({}));

        }
        
    }



    return (
        <MainLayout appState={appState} title="登录吧" appDispatch={appDispatch}>
            <Container className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form}> 
            <TextField 
                error={state.usernameError} 
                helperText={state.usernameErrorReason}
                label="用户名" 
                className={classes.formItem} 
                onChange={(e:object)=>handleInputChange(e, 'username')} 
                value={state.username} 
                />
                <TextField 
                label="密码"  
                type='password' 
                error={state.passwordError} 
                helperText={state.passwordErrorReason}
                onChange={(e:object)=>handleInputChange(e, 'password')} 
                value={state.password}
                className={classes.formItem}
                />
                <Button disabled={state.submitting} 
                type='submit' fullWidth color="primary" 
                variant='contained'>{state.submitting? "正在登录......": "登录"}</Button>
                <Link href="/register">
                     <Button component="a" fullWidth color="secondary" variant='contained'>注册</Button>
                </Link>
            </form>
            </Container>
           

        </MainLayout>
    )
}
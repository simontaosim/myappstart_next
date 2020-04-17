import React, { FormEvent, useReducer  } from 'react';
import MainLayout from '../layouts/MainLayout';
import { TextField, makeStyles, Container, Button } from '@material-ui/core';
import Link from 'next/link';
import authProvider from '../../services/authProvider';
import { loginUserReducer } from '../../reducers/users';
import { userFormState } from '../../reducers/initialStates';
import { changeInputField, submit, registerFail, registerSuccess } from '../../actions/users';
import { IRegisterPageProps } from '../PropInterfaces';
import { login, popMsg } from '../../actions/app';
import { useRouter } from 'next/router';


//所有正则
export const REQEXP_USERNAME_PATTERN = /^[a-zA-Z0-9_-]{5,21}$/;
//用户名５到21位（字母，数字，下划线，减号）
export const REQEXP_REGISTER_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//密码6个字符，至少一个字母和一个数字

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


export default function RegisterPage (props: IRegisterPageProps) {
    const { appState, appDispatch } = props;
    const classes = useStyles();
    const [state, dispatch] = useReducer(loginUserReducer, userFormState);
    const router = useRouter();
    const handleInputChange = (event: any, fieldName:string) => {
        const value = event.target.value;
        const field:any = {};
        field[fieldName] = value;
        dispatch(changeInputField(field));

    }
    const handleSubmit = async  (event: FormEvent) => {
        event.preventDefault();
        if(!state.username){
           return  dispatch(registerFail({usernameErrorReason: "用户名不得为空", usernameError: true}));
        }

        if(!REQEXP_USERNAME_PATTERN.test(state.username)){
            return  dispatch(registerFail({usernameErrorReason: "用户名５到21位（字母，数字，下划线，减号", usernameError: true}));
        }

        if(!state.password){
            return dispatch(registerFail({passwordErrorReason: "密码不得为空", passwordError: true}));
        }

        if(!REQEXP_REGISTER_PASSWORD.test(state.password)){
            return dispatch(registerFail({passwordErrorReason: "密码6个字符，至少一个字母和一个数字", passwordError: true}));
        }

        if(state.password !== state.passwordRepeat){
            return dispatch(registerFail({passwordRepeatErrorReason: "两次密码不一致", passwordRepeatError: true}));
        }

        dispatch(submit());
       const rlt = await  authProvider.register({
            username: state.username as string,
            password:  state.password as string,
        })
        console.log(rlt);
        if(rlt.reason === 'username exist'){
            dispatch(registerFail({usernameErrorReason: "用户名已经存在", usernameError: true}));
        }
        if(rlt.code === 'user:register.success'){
            dispatch(registerSuccess());
            appDispatch(login());
            appDispatch(popMsg({content: "注册成功", severity: 'success'}));
            router.push("/")
        }
    }

    return (
        <MainLayout appState={appState} title="注册吧" appDispatch={appDispatch}>
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
                <TextField 
                label="重复密码" 
                type='password'
                error={state.passwordRepeatError} 
                helperText={state.passwordRepeatErrorReason}
                 onChange={(e:object)=>handleInputChange(e, 'passwordRepeat')} 
                value={state.passwordRepeat}
                className={classes.formItem} 
                  />
                <Button disabled={state.submitting} 
                type='submit' fullWidth color="primary" 
                variant='contained'>{state.submitting? "注册中......": "注册"}</Button>
                <Link href="/login">
                     <Button  component="a" fullWidth color="secondary" variant='contained'>登录</Button>
                </Link>
            </form>
            </Container>
          

        </MainLayout>
    )
}
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { closeMsg } from '../actions/app';
import { IOverallMessageProps } from './PropInterfaces';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function OverallMessage(props:IOverallMessageProps) {
    const {open, appDispatch, severity, content} = props
     const classes = useStyles();
  
  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
        appDispatch(closeMsg());
        return;
    }
    appDispatch(closeMsg());
  };

  return (
    <div className={classes.root}>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
            {content}
        </Alert>
      </Snackbar>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import 'moment/locale/zh-cn';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IPostListItemProps } from './PropInterfaces';
import Link from 'next/link';
import dataProvider from '../services/dataProvider';
import { ListItemSecondaryAction } from '@material-ui/core';


const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    inline: {
      display: 'inline',
    },
  }),
);

export default function PostListItem({item}: IPostListItemProps){
    const classes = useStyles();
    const [user, setUser ] = useState({} as any);
    useEffect(()=>{
      if(item.authorId){
        dataProvider.getOne("users", {id: item.authorId}).then((rlt: any)=>{
          setUser({
            ...rlt,
          });
        })
      }
    }, [])
    console.log(user);
    return (
         <>
         <Link href={item.id? `posts/${item.id}` : "#"}>
         <ListItem alignItems="flex-start" component="a" button>
        <ListItemAvatar>
    <Avatar alt="Cindy Baker">{user.username}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {user.username}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          {
          item.status === "submitting" ? 
          (
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: 'baseline'
            }}>
              <div> 正在发表</div>
            <CircularProgress size={20} />
            </div>
          )
           : (moment(item.createdDate as string).fromNow())}
        </ListItemSecondaryAction>
      </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
        </>
    )
}
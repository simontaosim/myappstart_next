import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import PostListItem from './PostListItem';
import { IPostState } from '../reducers/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '800',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export default function PostList(props:any) {
  const classes = useStyles();
  const { posts } = props;
  return (
    <List className={classes.root}>
      {
        posts.map((item:IPostState, index:number) => 
          <PostListItem item={item} key={index} />
        )
      }
     
      
    </List>
  );
}

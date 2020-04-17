import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme:any) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: "100%",
        alignItems: "center",
        position: 'relative',
        top: 200,
    },
    title: {
        color: theme.primary,
    },
    progress: {
        width: "100%"
    }
})

);


export default function PageChange() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <CircularProgress className={classes.progress} />
        <h4 className={classes.title}>
               加载中
        </h4>
    </div>
  );
}

import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="sticky">
        <Typography className={classes.title} variant="h3">
          To-Do List
        </Typography>
      </AppBar>
    </div>
  );
};

export default NavBar;

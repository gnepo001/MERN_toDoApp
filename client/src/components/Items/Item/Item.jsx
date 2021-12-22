import React from "react";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import useStyles from "./styles.js";

const Item = ({ item, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">{item.text}</Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button onClick={() => setCurrentId(item._id)}>
          <MoreHorizIcon className={classes.icon} />
        </Button>
        <Button onClick={() => dispatch(deletePost(item._id))}>
          <DeleteIcon className={classes.icon} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

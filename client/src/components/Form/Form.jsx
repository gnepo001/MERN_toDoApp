import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts.js";

import useStyles from "./styles.js";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    text: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
      console.log("----Post Created ----");
    }
    clear();
  };

  const clear = () => {
    //setCurrentId(null); //resets currentID
    setPostData({ text: "" });
  };

  return (
    <>
      {/**Sumbit button does not need an onclick, onSubmit can be added
       * to Form just add type="Submit" on Button
       */}
      <form
        autoComplete="off"
        onSubmit={handleSumbit}
        className={`${classes.root} ${classes.form}`}
      >
        <TextField
          id="newTask"
          label="Task"
          value={postData.text}
          onChange={(e) => setPostData({ ...postData, text: e.target.value })}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          InputProps={{
            style: {
              color: "white",
            },
          }}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;

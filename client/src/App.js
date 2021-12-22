import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { Navbar, Items, Form } from "./components/index.js";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import "./background.css";

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: 40 }}>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Form currentId={currentId} />
          <Items setCurrentId={setCurrentId} />
        </Grid>
      </Box>
    </>
  );
};

export default App;

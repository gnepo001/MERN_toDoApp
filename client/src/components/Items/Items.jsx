import React from "react";
import Item from "./Item/Item.jsx";

import { useSelector } from "react-redux";
import { CircularProgress, Box } from "@material-ui/core";

const Items = ({ setCurrentId }) => {
  const items = useSelector((state) => state.posts);

  return !items.length ? (
    <CircularProgress />
  ) : (
    <Box sx={{ marginTop: 50 }}>
      {items.map((item) => (
        <Box key={item._id} sx={{ marginTop: 10 }}>
          <Item item={item} setCurrentId={setCurrentId} />
        </Box>
      ))}
    </Box>
  );
};

export default Items;

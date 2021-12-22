import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    backgroundColor: "#6272a4",
    color: "white",
    width: "30vw",
  },
  cardContent: {
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    card: {
      backgroundColor: "#6272a4",
      color: "white",
      width: "auto",
    },
  },
  icon: {
    color: "#282a36",
  },
  buttons: {
    justifyContent: "space-between",
  },
}));

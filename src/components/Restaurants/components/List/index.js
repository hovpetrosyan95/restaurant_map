import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    cursor: "pointer",
  },
}));

export default function ListWrapper({ data, setCurrent, id }) {
  const classes = useStyles();

  return (
    <List className={`${classes.root} list`}>
      {data.map((i) => (
        <ListItem
          onClick={() => setCurrent({ ...i, fromList: true })}
          key={i.id}
          selected={id === i.id}
          className={classes.listItem}
        >
          <ListItemText primary={i.title} secondary={i.address} />
          <Rating name="simple-controlled" value={i.rating} readOnly />
        </ListItem>
      ))}
    </List>
  );
}

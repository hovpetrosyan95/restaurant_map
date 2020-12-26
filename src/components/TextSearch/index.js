import React from "react";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "200px",
  },
}));

export default function TextSearch({ val, setSearchText }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <TextField
        id="standard-basic"
        label="Search By Title"
        value={val}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </FormControl>
  );
}

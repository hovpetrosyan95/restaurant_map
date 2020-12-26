import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "200px",
  },
}));

export default function CustomSelect({ label, values, onChange, val }) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={val}
        onChange={handleChange}
        width="100%"
      >
        {values.map((val, idx) => (
          <MenuItem value={val} key={idx}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

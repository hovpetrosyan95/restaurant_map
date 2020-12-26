import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "200px",
    margin: theme.spacing(1),
  },
  typography: {
    textAlign: "left",
  },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

export default function RangeSlider({ values, setRatingRange }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Typography
        id="discrete-slider-always"
        className={classes.typography}
        gutterBottom
      >
        Rating
      </Typography>
      <Slider
        min={0}
        max={5}
        defaultValue={[0, 5]}
        value={values}
        aria-labelledby="range-slider"
        step={1}
        marks={marks}
        onChange={(ev, newValue) => setRatingRange(newValue)}
      />
    </FormControl>
  );
}

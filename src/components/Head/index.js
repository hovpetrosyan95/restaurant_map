import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import RangeSlider from "../RangeSlider";
import CustomSelect from "../CustomSelect";
import { ASC_DESC } from "../../constants";

import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "200px",
  },
}));

export default function Head({ ratingRange, setRatingRange, sorting }) {
  const classes = useStyles();
  const {
    sortByName,
    sortByRating,
    setSortByName,
    setSortByRating,
  } = sorting || {
    sortByName: null,
    sortByRating: null,
    setSortByName: null,
    setSortByRating: null,
  };

  return (
    <div className="head">
      <div>
        <CustomSelect
          label="Sort By Rating"
          values={ASC_DESC}
          onChange={setSortByRating}
          val={sortByRating}
        />
      </div>
      <div>
        <CustomSelect
          label="Sort By Name"
          values={ASC_DESC}
          onChange={setSortByName}
          val={sortByName}
        />
      </div>
      <div>
        <RangeSlider />
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <TextField id="standard-basic" label="Search By Title" />
        </FormControl>
      </div>
    </div>
  );
}

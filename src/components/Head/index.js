import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import RangeSlider from "../RangeSlider";
import CustomSelect from "../CustomSelect";
import TextSearch from "../TextSearch";
import { ASC_DESC } from "../../constants";

import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "200px",
  },
}));

export default function Head({ sorting, filtering }) {
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

  const {
    ratingRange,
    setRatingRange,
    searchText,
    setSearchText,
  } = filtering || {
    ratingRange: null,
    setRatingRange: null,
    searchText: null,
    setSearchText: null,
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
        <RangeSlider values={ratingRange} setRatingRange={setRatingRange} />
      </div>

      <div>
        <TextSearch val={searchText} setSearchText={setSearchText} />
      </div>
    </div>
  );
}

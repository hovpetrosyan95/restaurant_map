import React from "react";

import Head from "../Head";
import List from "../List";

import "./styles.scss";

export default function Restaurants({
  restaurants,
  setCurrent,
  id,
  ratingRange,
  setRatingRange,
  sorting,
  filtering
}) {
  return (
    <div>
      <Head
        ratingRange={ratingRange}
        setRatingRange={setRatingRange}
        sorting={sorting}
        filtering={filtering}
      />
      <List data={restaurants} setCurrent={setCurrent} id={id} />
    </div>
  );
}

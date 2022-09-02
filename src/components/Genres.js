import React from "react";
import classes from "./Genres.module.css";
const Genres = ({ genres }) => {
  return (
    <div className={classes.genres}>
      {genres.map((genre) => (
        <span key={genre} className={classes.genre}>
          {genre}
        </span>
      ))}
    </div>
  );
};

export default Genres;

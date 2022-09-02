import React from "react";
import classes from "./Movie.module.css";
import { Link } from "react-router-dom";
import Genres from "./Genres";
import Button from "./Button";
const Movie = ({ movie }) => {
  const card = movie.show;
  return (
    <div className={classes.container}>
      <Link to={`/details/${card.name}`}>
        <img src={card.image.medium} />
      </Link>
      <div className={classes.MovieBody}>
        <div className={classes.name}>
          <div>
            <p>{card.name}</p>
            <p>{card.genres[0]}</p>
          </div>

          <p>{card.language}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

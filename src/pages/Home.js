import React from "react";
import Movie from "../components/Movie";
import classes from "./Home.module.css";
const Home = ({ movies }) => {
  return (
    <div className={classes.container}>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.show.url} />
      ))}
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./MovieDetails.module.css";
import Genres from "../components/Genres";
import Button from "../components/Button";
import Modal from "../components/Modal";

const MovieDetails = ({ movies }) => {
  let params = useParams();
  const movie = movies.find((movie) => movie.show.name === params.movieName);
  console.log(movie);
  const summary = movie.show.summary.replace(/<[^>]+>/g, "");

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      {openModal && <Modal movie={movie} onClick={openModalHandler} />}
      <div className={classes.header}>
        <img src={movie.show.image.original} alt="poster" />

        <div className={classes.synopsis}>
          <div className={classes.tvName}>
            <p>{movie.show.name}</p>
            <div>
              <div className={classes.star}></div>
              <p>{movie.show.rating.average}/10</p>
            </div>
          </div>

          <div className={classes.genres}>
            <Genres genres={movie.show.genres} />
          </div>
          <div className={classes.summary}>
            <p>synopsis</p>
            {summary}
          </div>
          {movie.show.schedule.time ? (
            <div className={classes.showTime}>
              <p>show time</p>
              <div className={classes.time}>
                <div>
                  <div className={classes.calender}></div>
                  <p>{movie.show.schedule.days}</p>
                  <p>{movie.show.schedule.time}</p>
                </div>

                <div>
                  <Button onClick={openModalHandler}>Book Now</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.noShows}>
              <div className={classes.calender}></div>
              <p>NO SHOWS AVAILABLE</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

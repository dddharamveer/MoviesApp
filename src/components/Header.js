import React from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className={classes.container}>
      <Link className={classes.Link} to={"/"}>
        <h2>Movies</h2>
      </Link>
      <Button link={"bookings"}>Bookings</Button>
    </div>
  );
};

import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
const Button = ({ children, onClick, link }) => {
  return !link ? (
    <div className={classes.buttons} onClick={onClick}>
      <p>{children}</p>
    </div>
  ) : (
    <Link className={classes.buttons} to={`/${link}`}>
      <p>{children}</p>
    </Link>
  );
};

export default Button;

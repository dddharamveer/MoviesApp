import React, { useState } from "react";
import Button from "./Button";
import classes from "./Modal.module.css";
const Modal = ({ movie, onClick }) => {
  const user = localStorage.getItem("user");
  console.log(JSON.parse(user));
  const initialData = user ? JSON.parse(user) : {};
  const [data, setData] = useState(initialData);
  const booking = user
    ? [
        ...initialData?.bookings,
        {
          name: movie.show.name,
          time: movie.show.schedule.time,
          image: movie.show.image.medium,
        },
      ]
    : [
        {
          name: movie.show.name,
          time: movie.show.schedule?.time,
          image: movie.show.image?.medium,
        },
      ];
  const checkoutHandler = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...data,
        bookings: booking,
      }),
    );
    onClick();
  };

  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={onClick}></div>

      <div className={classes.innerContainer}>
        <p className={classes.header}>Summary</p>
        <div className={classes.show}>
          <img src={movie.show.image.medium} />
          <div>
            <p>{movie.show.name}</p>
            <p>{movie.show.schedule.time}</p>
          </div>
          <p>180</p>
        </div>
        <div className={classes.inputs}>
          <label>Name</label>

          <input
            onChange={(text) =>
              setData((prev) => ({ ...prev, Name: text.target.value }))
            }
            value={data.Name}
            type="text"
          />

          <label>Email</label>
          <input
            type="text"
            value={data.email}
            onChange={(text) =>
              setData((prev) => ({ ...prev, email: text.target.value }))
            }
          />
        </div>
        <Button onClick={checkoutHandler}>Checkout</Button>
      </div>
    </div>
  );
};

export default Modal;

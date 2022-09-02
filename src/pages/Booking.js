import React from "react";
import classes from "./Booking.module.css";
export const Booking = () => {
  const user = localStorage.getItem("user");
  const bookings = user ? JSON.parse(user).bookings : null;
  if (!bookings) {
    return (
      <div className={classes.noBooking}>
        <p>No Bookings</p>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <p>Booking</p>
      <div className={classes.bookings}>
        {bookings.map((booking) => (
          <div key={booking.name} className={classes.booking}>
            <img src={booking?.image} />
            <div>
              <p>{booking?.name}</p>
              <p>{booking?.time}</p>
              <div>
                <p>Quantity</p>
                <p>1</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

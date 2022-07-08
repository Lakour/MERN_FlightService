import React, { useState, useEffect } from "react";
import axios from "axios";

import FlightList from "./FlightList";

function Flights() {
  const [flightList, setFlightList] = useState([]);

  //make a call to get all flights
  useEffect(
    () => {
      axios
        .get("http://localhost:8080/flight")
        .then(flights => {
          setFlightList(flights.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    [flightList]
  );

  return (
    <div>
      <FlightList list={flightList} />
    </div>
  );
}

export default Flights;

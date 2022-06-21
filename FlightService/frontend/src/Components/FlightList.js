import React, { useState } from "react";

function ShowFlights(props) {
  // console.log(props.list)

  function renderList() {
    return props.list.map(flight => {
      return (
        <div className="item" key={flight._id}>
          <i className="small middle alligned plane icon" />
          <label>Flight ID: </label>
          <span>
            {flight.flightId}
          </span>
          <div className="content">
            <label>Arrival Airport: </label>
            <span>
              {flight.arrivalAirport}
            </span>
            <div></div>
            <label>Departure Airport: </label>
            <span>
              {flight.departureAirport}
            </span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="ui celled list">
      {renderList()}
    </div>
  );
}

export default ShowFlights;

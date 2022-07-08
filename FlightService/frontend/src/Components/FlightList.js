import React from "react";
import { Link } from "react-router-dom";

function FlightList(props) {
  function renderList() {
    return props.list.map(flight => {
      return (
        <div className="ui container" key={flight._id}>
          <h4 className="ui horizontal divider header">
            <i className="small middle alligned plane icon" />
            Flight
          </h4>
          <table className="ui definition table">
            <tbody>
              <tr>
                <td className="two wide column">Fligth Number</td>
                <td>
                 {flight.flightNumber}
                </td>
              </tr>
              <tr>
                <td>Arrival Airport</td>
                <td>
                 {flight.arrivalAirport}
                </td>
              </tr>
              <tr>
                <td>Departure Airport</td>
                <td>
                  {flight.departureAirport}
                </td>
              </tr>
              <tr>
                <td>Departure Time</td>
                <td>
                  {/* saved space in the db by just getting time from datetime input */}
                  {flight.departureDate.split("T")[1].split(".")[0]}
                </td>
              </tr>
              <tr>
                <td>Arrival Time</td>
                <td>
                  {flight.arrivalDate.split("T")[1].split(".")[0]}
                </td>
              </tr>
              <tr>
                <td>Number of Passangers</td>
                <td>
                  {flight.passengers}
                </td>
              </tr>
              <tr>
                <td>Max Passanger Limit</td>
                <td>
                  {flight.passengerLimit}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="edit-flight">
            <Link
              className="mini ui red button"
              to="/delete"
              state={{ id: flight.flightId }}
            >
              <i className="delete icon" />
            </Link>
            <Link
              className="mini ui yellow button"
              to="/update"
              state={{ id: flight.flightId }}
            >
              <i className="edit icon" />
            </Link>
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

export default FlightList;

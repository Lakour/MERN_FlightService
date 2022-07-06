const Flight = require("../Models/Flight");
require("../db/mongoose");

/**
 * Finds flight by id
 * @param {String} flightId
 * @returns {Query} flight object\
 * 
  */
getFlightById = async flightId => {
  try {
    const flight = await Flight.findOne({ flightId: flightId });
    return flight;
  } catch (err) {
    throw { status: 400, message: err };
  }
};

/**
 * Retrives all flights in database
 * @returns {Query} list of all flights
 */
getAllFlights = async () => {
  try {
    const flightList = await Flight.find({});
    return flightList;
  } catch (err) {
    throw { status: 400, message: err };
  }
};


/**
 * Creates a new flight 
 * flightId is generated randomly
 * @param {Object} FlightObject
 * @returns {Number} flightId
 */
const createFlight = async ({
  flightNumber,
  departureDate,
  arrivalDate,
  departureAirport,
  arrivalAirport,
  passengers,
  passengerLimit
}) => {

  const flight = new Flight({
    flightId: Math.floor(Math.random() * 1000 - 1 - 1),
    flightNumber,
    departureDate,
    arrivalDate,
    departureAirport,
    arrivalAirport,
    passengers,
    passengerLimit
  });
  try {
    await flight.save();
    return flight.flightId;
  } catch (err) {
    throw { status: 400, message: err };
  }
};

/**
 * Deletes a flight using flightId as the filter for deleteOne
 * @param {String} id - flightId of the flight
 * @return {void} Nothing
 */
const deleteFlight = async id => {
  try {
    const deletedFlight = await Flight.deleteOne({ flightId: id });
    if (deletedFlight.deletedCount !== 1) {
      throw { message: "Flight does not exist" };
    }
  } catch (err) {
    throw { status: 400, message: err };
  }
};

/**
 * Updates flight 
 * findOneAndUpdate setting new = true, will return newly updated flight object
 * @param {String} flightIdNum
 * @param {Object} update : {key, value}
 * @return {Object} The updated flight 
 */
updateFlight = async (flightIdNum, { key, value }) => {

  console.log(flightIdNum, key, value)
  //filter object
  const filter = {
    flightId: flightIdNum
  };
  //update object
  const update = {
    [key]: value
  };

  try {
    const flight = await Flight.findOneAndUpdate(filter, update, { new: true });
    return flight;
  } catch (err) {
    throw { status: 400, message: err };
  }
};

module.exports = {
  createFlight,
  updateFlight,
  deleteFlight,
  getAllFlights,
  getFlightById
};

const Flight = require("../Models/Flight");
require("../db/mongoose");

getFlightById = async flightId => {
  try {
    const flight = await Flight.findOne({ flightId: flightId });
    return flight;
  } catch (err) {
    throw { status: 400, message: err };
  }
};

getAllFlights = async () => {
  try {
    const flightList = await Flight.find({});
    return flightList;
  } catch (err) {
    throw { status: 400, message: err };
  }
};

const createFlight = async ({
  flightNumber,
  departureDate,
  arrivalDate,
  departureTime,
  arrivalTime,
  departureAirport,
  arrivalAirport,
  passengers,
  passengerLimit
}) => {
  // console.log(flightNumber, departureDate, arrivalDate, arrivalTime,departureTime, departureAirport, arrivalAirport, passengers, passengerLimit);
  const flight = new Flight({
    flightId: Math.floor(Math.random() * 1000 - 1 - 1),
    flightNumber,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
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

updateFlight = async (flightIdNumber, { key, value }) => {

  const filter = {
    flightId: flightIdNumber
  };
  const update = {
    [key]: value
  };
  console.log(update);
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

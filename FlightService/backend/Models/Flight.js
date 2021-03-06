const mongoose = require('mongoose');
const {Schema} = mongoose;

const FlightSchema = new Schema({
  flightId: {type: 'number' ,required: true, unique: true},
  flightNumber: {type: 'number',required: true},
  departureDate: {type: Date,required: true}, 
  arrivalDate: {type: Date,required: true},
  departureAirport: {type: 'string',required: true},
  arrivalAirport: {type: 'string',required: true},
  passengers: {type: 'number'},
  passengerLimit: {type: 'number',required: true}
})

const Flight = mongoose.model('flight', FlightSchema);

module.exports = Flight;



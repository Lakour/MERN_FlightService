const express = require('express');
require('dotenv').config()
const flightRoute = require('./routes/flight.route')
const PORT = process.env.PORT || 3001
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

//all requests going here
app.use('/flight',  flightRoute)

// app.all('*', (req, res) => {
//   res.status(404).send('We don\'t have the resource you\'re looking for.');
// });

app.listen(PORT,()=>{
  console.log(`Server is listening on port ${PORT}`)
})
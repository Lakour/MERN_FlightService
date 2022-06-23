import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FlightList from './FlightList';

function Flights(props) {

  const [state,setState] = useState('')
  const [flightList, setFlightList] = useState([])



  //make a call to get all flights
  useEffect(()=>{
  const fetchData = async () =>{
    const flights = await axios.get('http://localhost:8080/flight')
    setFlightList(flights.data)
  }
  fetchData()
 
},[])


  return (
    <>
    <FlightList list={flightList}/>
  
    </>
  )
}

export default Flights
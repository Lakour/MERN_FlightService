import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FlightList from './FlightList';

function Flights(props) {

  const [flightList, setFlightList] = useState([])



  //make a call to get all flights
  useEffect(()=>{
    axios.get('http://localhost:8080/flight').then((flights)=>{
      setFlightList(flights.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[flightList])
  

 



  return (
    <>
    <FlightList list={flightList}/>
  
    </>
  )
}

export default Flights
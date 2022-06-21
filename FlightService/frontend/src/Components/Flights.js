import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FlightList from './FlightList'
function Flights(props) {

  const [state,setState] = useState('')
  const [flightList, setFlightList] = useState([])

  // function onChangeInput(event){
  //   setState(event.target.value)
  // }

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
    {/* <label htmlFor="username">Username:</label>
    <input id="username" type="text" onChange={onChangeInput} value={state}/>
    <input type="submit" value="Submit Form" onClick={()=>{console.log(state)}}/> */}
 
    </>
  )
}

export default Flights
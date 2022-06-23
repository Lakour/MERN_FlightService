import React from 'react'
import DeleteFlightForm from './DeleteFlightForm'
import {useLocation} from 'react-router-dom';

function DeleteFlight(props) {

  //retrieves current flight id to populate
  // input field with
  const location = useLocation();
  const flightId = location.state.id;
  
  return (
    <div>
      <DeleteFlightForm flightId={flightId}/>
    </div>
  )
}

export default DeleteFlight
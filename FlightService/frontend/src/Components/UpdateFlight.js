import React from 'react';
import {useLocation} from 'react-router-dom';

import UpdateFlightForm from './UpdateFlightForm';

function UpdateFlight() {
  const location = useLocation();
  const flightId = location.state?.id ;

  return (
    <UpdateFlightForm flightId={flightId}/>
  )
}

export default UpdateFlight
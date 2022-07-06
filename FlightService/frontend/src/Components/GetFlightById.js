import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FlightListById from './FlightListById'

const GetFlightById = props => {
  const navigate = useNavigate()
  const [redirect, setRedirect] = useState(false);
  const [flight, setFlight] = useState([]);



  
  const renderInput = formProps => {
    return (
      <div className="field">
        <label>
          {formProps.label}
        </label>
        <input
          type="text"
          value={formProps.input.value}
          onChange={formProps.input.onChange}
          autoComplete="off"
        />
      </div>
    );
  };

  const onSubmit = async formValues => {
    try{

      const flight = await axios.get(
        `http://localhost:8080/flight/${formValues.flightId}`
        );
        if(flight.data == null){
          window.alert(`Flight with id: ${formValues.flightId} does not exist`)
          navigate('/show-flight')
        } else {
          setFlight([flight.data]);
          setRedirect(true);
        }
      } catch(err){
        window.alert(`Error try again`)
      }
   
  };

  return (
    <div>
      {redirect
        ? <FlightListById list={flight}/>
        : <form
            onSubmit={props.handleSubmit(onSubmit)}
            className="ui form error"
          >
            {/* requird props are name and component */}
            <Field
              name="flightId"
              // component is needed to render the actual field
              component={renderInput}
              label="Enter Flight Id"
            />

            <button  id="btn" className="ui button primary">Submit</button>
          </form>}
    </div>
  );
};

export default reduxForm({
  form: "flightId"
})(GetFlightById);

import axios from "axios";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {useNavigate} from 'react-router-dom'

const UpdateFlightForm = props => {
  const navigate = useNavigate();


  const onSubmit = formValues => {
    axios.patch(
      `http://localhost:8080/flight/update-flight/${props.flightId
        ? props.flightId
        : formValues.flightId}`,
        { key: formValues.property, value: formValues.propertyUpdate }
        );
        navigate('/show')
  };

  const renderInputForId = formProps => {
    return (
      <div className="field">
        <label>
          {formProps.label}
        </label>
        <input
          type="text"
          autoFocus="true"
          onChange={formProps.input.onChange}
          autoComplete="off"
          value={props.flightId ? props.flightId : formProps.input.value}
        />
      </div>
    );
  };

  const renderInput = formProps => {
    return (
      <div className="field">
        <label>
          {formProps.label}
        </label>
        <input
          type="text"
          // value={formProps.input.value}
          onChange={formProps.input.onChange}
          autoComplete="off"
          value={formProps.input.value}
        />
      </div>
    );
  };

  return (
    <div  className="field">
      <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
        <Field
          name="flightId"
          component={renderInputForId}
          label="Flight ID"
        />
        <Field
          name="property"
          component="select"
          label="Pick From The List"
        >
          <option />
          <option value="flightNumber">Flight Number</option>
          <option value="departureDate">Departure Date</option>
          <option value="arrivalDate">Arrival Date</option>
          <option value="departureTime">Departure Time</option>
          <option value="arrivalTime">Arrival Time</option>
          <option value="departureAirport">Departure Airport</option>
          <option value="arrivalAirport">Arrival Airport</option>
          <option value="passengers">Number of Passengers</option>
          <option value="passengerLimit">Passenger Limit</option>
        </Field>
        <Field
          name="propertyUpdate"
          component={renderInput}
          label="Enter New Info"
        />
        <br />
        <button  id="btn" className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "updateFlightForm"
})(UpdateFlightForm);

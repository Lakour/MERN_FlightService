import axios from "axios";
import React from "react";
import { Field, reduxForm } from "redux-form";

const UpdateFlightForm = props => {
  const onSubmit = formValues => {
    console.log(formValues.flightId, formValues.property, formValues.propertyUpdate);
    axios.patch(`http://localhost:8080/flight/update-flight/${formValues.flightId}`,
    {key: formValues.property, value: formValues.propertyUpdate})
  };

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

  return (
    <div>
      {/* handleSubmit is a callback fcn provided by redux-form 
      it automatically handles e.preventDefault()
      */}
      <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
        <Field
          name="flightId"
          component={renderInput}
          label="Enter Flight ID"
        />
        <Field name="property" component="select" label="Pick From The List">
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
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "updateFlightForm"
})(UpdateFlightForm);

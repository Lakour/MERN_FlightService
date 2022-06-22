import React from "react";
import { Field, reduxForm } from "redux-form";

 const UpdateFlightForm = (props)=>{
  
  const onSubmit = (formValues) => {
    console.log(formValues.property, formValues.propertyUpdate);
  };

  const renderInput = (formProps)=>{
    return(
      <div className='field'>
      <label>
        {formProps.label}
      </label>
      <input
        type="text"
        value={formProps.input.value}
        onChange={formProps.input.onChange}
        autoComplete="off"
      />
      {/* {this.renderError(formProps.meta)} */}
    </div>
    )
  }
  

    return (
      <div>
      {/* handleSubmit is a callback fcn provided by redux-form 
      it automatically handles e.preventDefault()
      */}
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        className="ui form error"
      >
        {/* requird props are name and component */}
        <Field name="property" component="select">
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
          <Field name="propertyUpdate" component={renderInput} label="Update Flight">

          </Field>
      
        <br />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
    );
  }


export default reduxForm({
  form: "updateFlightForm"
})(UpdateFlightForm);

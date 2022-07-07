import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


/**
 * 
 * @param {*} props 
 * @returns Nothing
 * Renders form to add a flight to the database
 */
const CreateFlightForm =(props)=> {

  const navigate = useNavigate();

  const renderInput = formProps => {
    const className = `field ${formProps.meta.error && formProps.meta.touched
      ? formProps.meta.error
      : " "}`;
      return (
        <div className={className}>
        <label>
          {formProps.label}
        </label>
        <input
        className=""
        type="text"
        value={formProps.input.value}
        onChange={formProps.input.onChange}
        // autoComplete="off"
        />
        {renderError(formProps.meta)}
      </div>
    );
  };
  
  const renderDateAndTimeInput = (formProps)=>{
    const className = `field ${formProps.meta.error && formProps.meta.touched
      ? formProps.meta.error
      : " "}`;
      return (
        <div className={className}>
        <label>
          {formProps.label}
        </label>
        <input type="datetime-local"
          value={formProps.input.value}
          onChange={formProps.input.onChange}
          autoComplete="off"
          />
        {renderError(formProps.meta)}
      </div>
    );
  }
  
  const renderError =({ error, touched })=> {
 
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }


  //^formValues, object with all our values from the inputs
  const onSubmit=(formValues)=> {

    axios.post('http://localhost:8080/flight/create-flight', formValues)
    
    navigate('/show');

  }
  

    return (
      <div>
        <form
        //^this.props is auto provided by redux-form
          onSubmit={props.handleSubmit(onSubmit)}
          className="ui form error"
        >
            <h4 class="ui dividing header">Create A Flight</h4>
          <div className="ui fluid icon input">

          {/* requird props are name and component */}
          <Field
            name="flightNumber"
            // ^component is needed to render the actual input
            component={renderInput}
            label="Flight Number"
            />
          
          <Field
            name="departureDate"
            component={renderDateAndTimeInput}
            label="Departure Date"
          />
          <Field
            name="arrivalDate"
            component={renderDateAndTimeInput}
            label="Arrival Date"
          />
          <Field
            name="departureAirport"
            component={renderInput}
            label="Departure Airport"
          />
          <Field
            name="arrivalAirport"
            component={renderInput}
            label="Arrival Airport"
          />
          <Field
            name="passengers"
            component={renderInput}
            label="Passangers"
            type="number"
          />
          <Field
            name="passengerLimit"
            component={renderInput}
            label="Passanger Limit"
            type="number"

          />
            </div>
          <br />
          <button  id="btn" className="ui button primary">Submit</button>
        </form>
        </div>
     
 
    );
  }


const validate = formValues => {
 
  const errors = {};
  if (!formValues.flightNumber) {
    errors.flightNumber = "You must enter a flight number";
  }
  if (!formValues.departureDate) {
    errors.departureDate = "You must enter a departure date";
  }
  if (!formValues.arrivalDate) {
    errors.arrivalDate = "You must enter an arrival date";
  }
  if (!formValues.departureAirport) {
    errors.departureAirport = "You must enter a departure airport";
  }
  if (!formValues.arrivalAirport) {
    errors.arrivalAirport = "You must enter an arrival airport";
  }
  if (!formValues.passengers) {
    errors.passengers = "You must enter the number of passengers";
  }
  if (!formValues.passengerLimit) {
    errors.passengerLimit = "You must enter a passanger limit";

  }

  if(Number(formValues.passengers) > Number(formValues.passengerLimit)){
   errors.passengerLimit = "You exceeded the maximum number of passengers";
  }

  return errors;
};

export default reduxForm({
  form: "reduxForm2",
  validate: validate
})(CreateFlightForm);

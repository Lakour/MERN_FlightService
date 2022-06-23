import React from "react";
import { Field, reduxForm } from "redux-form";

class ReduxForm extends React.Component {

  renderInput = formProps => {
    const className = `field ${formProps.meta.error && formProps.meta.touched
      ? formProps.meta.error
      : " "}`;
    console.log(formProps);
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
          autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderDateAndTimeInput = (formProps)=>{
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
        {/* <input
          type="text"
          value={formProps.input.value}
          onChange={formProps.input.onChange}
          autoComplete="off"
        /> */}
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  renderError({ error, touched }) {
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

  //formValues object with all our values
  onSubmit(formValues) {
    //make a call to the backend
    console.log(formValues);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* handleSubmit is a callback fcn provided by redux-form 
        it automatically handles e.preventDefault()
        */}
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          {/* requird props are name and component */}
          <Field
            name="flightNumber"
            // component is needed to render the actual field
            component={this.renderInput}
            label="Flight Number"
          />
          <Field
            name="departureDate"
            component={this.renderDateAndTimeInput}
            label="Departure Date"
          />
          <Field
            name="arrivalDate"
            component={this.renderDateAndTimeInput}
            label="Arrival Date"
          />
          <Field
            name="departureTime"
            component={this.renderInput}
            label="Departure Time"
          />
          <Field
            name="arrivalTime"
            component={this.renderInput}
            label="Arrival Date"
          />
          <Field
            name="departureAirport"
            component={this.renderInput}
            label="Departure Airport"
          />
          <Field
            name="arrivalAirport"
            component={this.renderInput}
            label="Arrival Airport"
          />
          <Field
            name="passengers"
            component={this.renderInput}
            label="Number of Passangers"
            type="number"
          />
          <Field
            name="passengerLimit"
            component={this.renderInput}
            label="Passanger Limit"
            type="number"

          />

          <br />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
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
  if (!formValues.departureTime) {
    errors.departureTime = "You must enter a departure time";
  }
  if (!formValues.arrivalTime) {
    errors.arrivalTime = "You must enter an arrival time";
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
  form: "reduxForm",
  validate: validate
})(ReduxForm);

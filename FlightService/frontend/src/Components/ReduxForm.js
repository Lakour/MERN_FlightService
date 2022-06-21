import React from "react";
import { Field, reduxForm } from "redux-form";

class ReduxForm extends React.Component {
  renderInput = formProps => {
    const className = `field ${formProps.meta.error && formProps.meta.touched
      ? formProps.meta.error
      : " "}`;
    // console.log(formProps.meta.error);
    return (
      <div className={className}>
        <label>
          {formProps.label}
        </label>
        <input
          type="text"
          value={formProps.input.value}
          onChange={formProps.input.onChange}
          autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

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

  onSubmit(formValues) {
    //make a call to the backend
    console.log(formValues);
  }

  render() {
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
            component={this.renderInput}
            label="Flight Number"
          />
          <Field
            name="departureDate"
            component={this.renderInput}
            label="Departure Date"
          />
          <Field
            name="arrivalDate"
            component={this.renderInput}
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
            name="passangers"
            component={this.renderInput}
            label="Number of Passangers"
            type="number"
          />
          <Field
            name="passangerLimit"
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
  if (!formValues.passangers) {
    errors.passangers = "You must enter the number of passangers";
  }
  if (!formValues.passangerLimit) {
    errors.passangerLimit = "You must enter a passanger limit";

  }
  if(Number(formValues.passangers) > Number(formValues.passangerLimit)){
   errors.passangerLimit = "You exceeded the maximum number of passangers";
  }

  return errors;
};

export default reduxForm({
  form: "reduxForm",
  validate: validate
})(ReduxForm);

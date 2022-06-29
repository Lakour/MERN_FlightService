import React from "react";
import { Field, reduxForm } from "redux-form";
import {Link} from 'react-router-dom';
import Flights from './Flights';
import axios from "axios";

class ReduxForm extends React.Component {

  state = {redirect: false};
  // componentWillUnmount(){
  //   console.log("unmounting")
  //   if(this.props.submitFailed){
  //     this.setState({redirect: true})
  //   }

  //   }
  
    componentDidUpdate(){
      console.log(this.props.submitFailed)

      // if(this.props.submitFailed){
      //   this.setState({redirect: true})
      // }
    }
    componentDidMount(){
      // console.log(this.props.submitFailed)

      this.setState({redirect: false});
  }

  renderInput = formProps => {
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
        {this.renderError(formProps.meta)}
      </div>
    );
  }
  
  renderError({ error, touched }) {
    // console.log(error, touched)
    
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
  onSubmit(formValues) {
        console.log(formValues)
        if(this.props.submitFailed){
          this.setState({redirect: true})
        }
    // axios.post('http://localhost:8080/flight/create-flight', formValues)

    //after new flight is created navigate to home page

  }
  
  render() {

    return (
      <div>
     {this.state.redirect ? 
     <Flights/> 
      :
      <div>
        <form
        //^this.props is auto provided by redux-form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          {/* requird props are name and component */}
          <Field
            name="flightNumber"
            // ^component is needed to render the actual input
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
          <button  id="btn" className="ui button primary">Submit</button>
        </form>
        </div>
       }
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

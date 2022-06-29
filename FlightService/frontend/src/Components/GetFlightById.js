import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import axios from "axios";
import FlightList from "./FlightList";

const GetFlightById = props => {
  const [redirect, setRedirect] = useState(false);
  const [flight, setFlight] = useState([]);

  const renderInput = formProps => {
    return (
      <div className="field">
        <label>
          {formProps.label}
        </label>
        <input
          // placeholder={props.flightId}
          type="text"
          value={formProps.input.value}
          onChange={formProps.input.onChange}
          autoComplete="off"
        />
        {/* {this.renderError(formProps.meta)} */}
      </div>
    );
  };

  const onSubmit = async formValues => {
    const flight = await axios.get(
      `http://localhost:8080/flight/${formValues.flightId}`
    );
    setFlight([flight.data]);
    setRedirect(true);
    //got to Flightlist and pass flight as a prop
  };

  // useEffect(
  //   () => {
  //     console.log(flight);
  //   },
  //   [flight]
  // );

  return (
    <div>
      {redirect
        ? <FlightList list={flight}/>
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

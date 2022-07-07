import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

/**
 * 
 * @param {*} props 
 * @returns Nothing
 * Renders form to delete only by flightId
 */
 const DeleteFlightForm = (props)=>{
  const navigate = useNavigate();


const renderInput = (formProps) =>{
  return(
    <div className='field'>
      <label>
        {formProps.label}
      </label>
      <input
      // placeholder={props.flightId}
        type="text"
        value={props.flightId? props.flightId: formProps.input.value}
        onChange={formProps.input.onChange}
        autoComplete="off"
        autoFocus="true"


      />
    </div>
  );
}

  const onSubmit = (formValues) => {
    axios.delete(`http://localhost:8080/flight/delete-flight/${ props.flightId ?  props.flightId: formValues.flightId}`)
    navigate('/show')
  };
  

    return (
      <div>
      <form
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
      
        <button id="btn" className="ui button primary">Submit</button>
      </form>
    </div>
    );
  }


export default reduxForm({
  form: "deleteFlightForm"
})(DeleteFlightForm);

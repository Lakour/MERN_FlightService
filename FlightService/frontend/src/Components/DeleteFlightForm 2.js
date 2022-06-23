// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import axios from 'axios';
//  const DeleteFlightForm = (props)=>{
//   // console.log(props)
// const renderInput = (formProps) =>{
//   return(
//     <div className='field'>
//       <label>
//         {formProps.label}
//       </label>
//       <input
//         type="text"
//         value={formProps.input.value}
//         onChange={formProps.input.onChange}
//         autoComplete="off"
//       />
//       {/* {this.renderError(formProps.meta)} */}
//     </div>
//   );
// }

//   const onSubmit = (formValues) => {
//     console.log(formValues);
//     axios.delete(`http://localhost:8080/flight/delete-flight${formValues.flightId}`)
//   };
  

//     return (
//       <div>
//       {/* handleSubmit is a callback fcn provided by redux-form 
//       it automatically handles e.preventDefault()
//       */}
//       <form
//         onSubmit={props.handleSubmit(onSubmit)}
//         className="ui form error"
//       >
//         {/* requird props are name and component */}
//         <Field
//             name="deleteFlight"
//             // component is needed to render the actual field
//             component={renderInput}
//             label="Enter Flight Id"
//           />
      
//         <button className="ui button primary">Submit</button>
//       </form>
//     </div>
//     );
//   }


// export default reduxForm({
//   form: "deleteFlightForm"
// })(DeleteFlightForm);

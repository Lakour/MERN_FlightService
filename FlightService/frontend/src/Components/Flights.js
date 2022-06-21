import React, {useState} from 'react'

function Flights(props) {

const [state, setState] = useState('')

  function onChangeInput(event){
    setState(event.target.value)
  }
  //make a call to get all flights

  return (
    <>
    {/* <form> */}

    <label htmlFor="username">Username:</label>
    <input id="username" type="text" onChange={onChangeInput} value={state}/>
    <input type="submit" value="Submit Form" onClick={()=>{console.log(state)}}/>
    {/* </form> */}
    {/* <div><h1>{props.prop}</h1></div> */}
    </>
  )
}

export default Flights
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
// import {Center} from './Style';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CreateFlight from './Components/CreateFlight';
import DeleteFlight from './Components/DeleteFlight';
import Flights from './Components/Flights';
import UpdateFlight from './Components/UpdateFlight';
import GetFlightById from "./Components/GetFlightById";
import MyContext, {contexts} from './contexts/MyContext'

function App() {
  const [signIn, setSignIn] = useState(false);
  // const [visible, setVisible] = useState(true);
  // const [flights, setFlights] = useState([]);
  // const [currTheme, setCurrentTheme] = useState(contexts.light)



  // function changeThemes(){
  //   setCurrentTheme(!currTheme)
  // }

  //make a call to get all flightsa
  //setFlights(response.data)

  // function toggleVisibility() {
  //   console.log("here");
  //   setVisible(!visible);
  // }

  return (
    // <MyContext.Provider value={currTheme}>
    <>
    <BrowserRouter>
     <Navbar 
     navItemOne="Create A Flight" 
     navItemTwo="Show All Flights" 
     navItemThree="Update A Flight"
     navItemFour="Delete A Flight"
     navItemFive="Show Flight By Id"
     signInStatus={signIn}
     setSignInStatus={setSignIn}
     />

      <div>
    <Routes>
      {signIn ? 
      <>
    <Route exact path='/create' element={<CreateFlight/>}></Route>
    <Route exact path='/update' element={<UpdateFlight/>}></Route>
    <Route exact path='/delete' element={<DeleteFlight/>}></Route>
    <Route exact path="/show-flight" element={<GetFlightById/>}></Route>
    <Route exact path='/show' element={<Flights/>}></Route>   
      </>
   :   <Route path='/' element={<Home/>}></Route>} 
    </Routes>
      </div>
     {/* <button onClick={changeThemes}>Theme</button>  */}
    </BrowserRouter> 

  </>
    // <MyContext.Provider/>
  );
}

export default App;

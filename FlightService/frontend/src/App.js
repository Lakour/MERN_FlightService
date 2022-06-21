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
import ShowFlights from './Components/FlightList';
import UpdateFlight from './Components/UpdateFlight';
import MyContext, {contexts} from './contexts/MyContext'

function App() {
  // const [visible, setVisible] = useState(true);
  const [flights, setFlights] = useState([]);
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
     navItemOne="Create A Flight" navItemTwo="Show All Flights" navItemThree="Update A Flight" navItemFour="Delete A Flight"
     />
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/create' element={<CreateFlight/>}></Route>
    <Route exact path='/update' element={<UpdateFlight/>}></Route>
    <Route exact path='/delete' element={<DeleteFlight/>}></Route>
  <Route exact path='/show' element={<ShowFlights/>}></Route> 
     {/* <Route path='*' element={<Error/>}></Route> */}
  
    </Routes>
     {/* <button onClick={changeThemes}>Theme</button>  */}
    </BrowserRouter> 

  </>
    // <MyContext.Provider/>
  );
}

export default App;

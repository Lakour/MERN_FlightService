import React, {useEffect, useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CreateFlight from './Components/CreateFlight';
import DeleteFlight from './Components/DeleteFlight';
import Flights from './Components/Flights';
import UpdateFlight from './Components/UpdateFlight';
import GetFlightById from "./Components/GetFlightById";
import FlightListById from './Components/FlightListById'
import history from './history'
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import ThemeSelector from './theme/ThemeSelector';
 //Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;
function App() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [signIn, setSignIn] = useState(false);


  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);


  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });


  return (
    <div>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>

        <Container style={{fontFamily: selectedTheme.font}}>
        <>
    <BrowserRouter history={history}>
 
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
      {signIn ? 
      <>
    <Routes>
    <Route exact path='/create' element={<CreateFlight/>}></Route>
    <Route exact path='/update' element={<UpdateFlight/>}></Route>
    <Route exact path='/delete' element={<DeleteFlight/>}></Route>
    <Route exact path="/show-flight" element={<GetFlightById/>}></Route>
    <Route exact path='/show' element={<Flights/>}></Route>   
    <Route exact path='/show-flight-id' element={<FlightListById/>}></Route>
  </Routes>
      </>
   : 
   <>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   </Routes>
  <ThemeSelector setter={ setSelectedTheme } />
   </>
  } 
    </div>
    </BrowserRouter> 
  </>

        </Container>
      </ThemeProvider>
    }
    </div>
  );
}


  // return (
  //   <>
  //   <BrowserRouter history={history}>
 
  //    <Navbar 
  //    navItemOne="Create A Flight" 
  //    navItemTwo="Show All Flights" 
  //    navItemThree="Update A Flight"
  //    navItemFour="Delete A Flight"
  //    navItemFive="Show Flight By Id"
  //    signInStatus={signIn}
  //    setSignInStatus={setSignIn}
  //    />

  //     <div>
  //   <Routes>
  //     {signIn ? 
  //     <>
  //   <Route exact path='/create' element={<CreateFlight/>}></Route>
  //   <Route exact path='/update' element={<UpdateFlight/>}></Route>
  //   <Route exact path='/delete' element={<DeleteFlight/>}></Route>
  //   <Route exact path="/show-flight" element={<GetFlightById/>}></Route>
  //   <Route exact path='/show' element={<Flights/>}></Route>   
  //   <Route exact path='/show-flight-id' element={<FlightListById/>}></Route>
    
    


  //     </>
  //  : 
  //  <Route path='/' element={<Home/>}></Route>
  //  } 
  //   </Routes>
  //     </div>
  //    {/* <button onClick={changeThemes}>Theme</button>  */}
  //   </BrowserRouter> 

  // </>
  // );


export default App;

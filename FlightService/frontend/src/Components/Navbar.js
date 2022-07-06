import React from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";

function Navbar(props) {

  return (

    <div className="ui secondary pointing menu"
    style={{ backgroundColor: "#eeeeee"}}
    >
      {
        props.signInStatus ?
        <>
   <Link className="item" to={"/create"}>
      {props.navItemOne}
      </Link>
      <Link className="item" to={"/show"}>
        {props.navItemTwo}
       </Link>
       <Link className="item" to={"/show-flight"}>
         {props.navItemFive}
      </Link>
      
      </> : null
  }
  <div className="right menu">
  
    <OAuth signIn={props.signInStatus} setSignIn={props.setSignInStatus} />
  </div>
</div>

  );
}

export default Navbar;

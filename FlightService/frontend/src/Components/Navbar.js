import React from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";
function Navbar(props) {
  // console.log(props.signInStatus)
  return (
    <div className="ui secondary pointing  menu"
    style={{ backgroundColor: "#eeeeee"}}
    >
   <Link className="item" to={"/create"}>
      {props.navItemOne}
      </Link>
      <Link className="item" to={"/show"}>
        {props.navItemTwo}
       </Link>
       <Link className="item" to={"/show-flight"}>
         {props.navItemFive}
      </Link>
  <div className="right menu">
  
    <OAuth signIn={props.signInStatus} setSignIn={props.setSignInStatus} />
  </div>
</div>
    // <>
    // <div
    //   className="ui secondary pointing menu"
    //   style={{ backgroundColor: "#eeeeee", diplay: "flex" }}
    // >
    //   <Link className="item" to={"/create"}>
    //     {props.navItemOne}
    //   </Link>
    //   <br />
    //   <br />
    //   <Link className="item" to={"/show"}>
    //     {props.navItemTwo}
    //   </Link>
    //   <br />
    //   <br />
    //   <Link className="item" to={"/show-flight"}>
    //     {props.navItemFive}
    //   </Link>

    //   </div>
    //   <div
    //     className="flex-container-two"
    //     // style={{ justifyContent: "flex-end" }}
    //   >
    //     <OAuth signIn={props.signInStatus} setSignIn={props.setSignInStatus} />
    //   </div>
    //   </>
  );
}

export default Navbar;

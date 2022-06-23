import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ backgroundColor: "#eeeeee", diplay: "flex" }}
    >
      <Link className="item" to={"/create"}>
        {props.navItemOne}
      </Link>
      <br />
      <br />
      <Link className="item" to={"/show"}>
        {props.navItemTwo}
      </Link>
      <br />
      <br />

      <Link className="item" to={"/update"}>
        {props.navItemThree}
      </Link>
      <br />
      <br />
      <Link className="item" to={"/delete"}>
        {props.navItemFour}
      </Link>
      <br />
      <br />
      <Link className="item" to={"/show-flight"}>
        {props.navItemFive}
      </Link>
      <div className="right menu" />
    </div>
  );
}

export default Navbar;

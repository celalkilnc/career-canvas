import React, { useEffect, useState } from "react";
import "./SwitchbarStyle.css";
import SwtitchButton from "./SwtitchButton";
import { Link } from "react-scroll";

function Switchbar() {
  return (
    <div className="container">
      <lu className="switchBar">
        <SwtitchButton path={"information"} />
        <SwtitchButton path={"experience"} />
        <SwtitchButton path={"education"} />
        <SwtitchButton path={"projects"} />
      </lu>
    </div>
  );
}

export default Switchbar;

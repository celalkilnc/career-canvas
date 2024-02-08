import Education from "../education/Education";
import Experience from "../experiance/Experiance";
import Information from "../information/Information";
import "./HomeStyle.css";

import React from "react";

function Home() {
  return (
    <div className="home">
      <div id="information">
        <Information/>
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education"> 
        <Education />
      </div>
    </div>
  );
}

export default Home;

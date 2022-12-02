import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room, typing }) => {
  console.log(room);
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />

        <div>
          <h3 style={{ margin: "0px" }}>{room}</h3>

          {typing ? (
            <p style={{ margin: "0px", color: "#69F0AE" }}>Typing...</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [room, setRoom] = useState("kind");
  const [name, setName] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="heading">Start Chatting</div>
        <div>
          <input
            placeholder="Your Name"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />

          <select
            className="joinInput mt-20"
            name="bot"
            onChange={(event) => setRoom(event.target.value)}
          >
            <option selected value="kind">
              Kind/Helpful Bot
            </option>
            <option value="savage">Savage Bot</option>
          </select>
          {/* <input
            placeholder="Room's Name"
            className='joinInput mt-20'
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />*/}
        </div>
        <Link
          onClick={(e) => (!name ? e.preventDesdfault() : null)}
          to={`/chat?name=${name}&bot=${room}`}
        >
          {/* &room=${room} */}
          <button type="submit" className="button mt-20 ">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

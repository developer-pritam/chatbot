import React, { useState, useEffect } from "react";
import queryString from "query-string";
// import io from "socket.io-client";

import Messages from "../messages/Messages";
import InfoBar from "../info-bar/InfoBar";
import Input from "../input/Input";

import "./Chat.css";

// let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [message, setMessage] = useState("");
  const [botType, setBotType] = useState("");

  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const { name, bot } = queryString.parse(location.search);
    setName(name);
    setBotType(bot);
    setRoom(`Pritam ${bot.charAt(0).toUpperCase() + bot.substring(1)} Bot`);
  }, [location.search]);

  async function getMessage(message) {
    let msg = "";

    messages.map((mess, i) => {
      // console.log(mess.text);

      if (mess.user === "Bot") {
        msg += "Pritam: " + mess.text + "\n";
      } else {
        msg += "User: " + mess.text + "\n";
      }
      return "";
    });
    msg += "User: " + message + "\n";

    var formdata = new FormData();
    formdata.append("userMessage", msg);
    formdata.append("userName", name);
    formdata.append("bot", botType);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    let response = await fetch(
      "https://us-central1-fir-project-82e95.cloudfunctions.net/chatAPI",
      requestOptions
    );
    let data = await response.json();
    return data.message;
  }
  // let preChat = "";

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message) {
      setMessages([...messages, { user: name, text: message, isSender: true }]);
      let tempMsg = message;
      setMessage("");
      setTyping(true);
      let res = await getMessage(tempMsg);
      setMessages((prevData) => {
        return [...prevData, { user: "Bot", text: res, isSender: false }];
      });

      setTyping(false);
    }
  };
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} typing={typing} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;

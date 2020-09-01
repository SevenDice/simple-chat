import React, { useState } from "react";
import axios from "axios";
import socket from "../socket";

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const onEnter = () => {
    if (!roomId || !userName) {
      return alert("Некорректные данные");
    }
    axios
      .post("/rooms", {
        roomId,
        userName,
      })
      .then(onLogin);
    console.log(roomId, userName);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="btn btn-success" onClick={onEnter}>
        Войти
      </button>
    </div>
  );
}

export default JoinBlock;

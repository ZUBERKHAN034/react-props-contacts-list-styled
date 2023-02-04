import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card({ name, imgURL, phone, email }) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar imgURL={imgURL} />
      </div>
      <div className="bottom">
        <Info content={phone} />
        <Info content={email} />
      </div>
    </div>
  );
}

export default Card;

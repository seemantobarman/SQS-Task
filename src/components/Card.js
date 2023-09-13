import React from "react";

const Card = ({ icon, header, desc }) => {
  return (
    <div
      className="glow-on-hover zoom"
      style={{
        padding: "8px",
        borderRadius: "20px",
        background: "rgba(0, 0, 0, .5)",
        width: "200px",
        height: "auto",
        margin: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {icon}
        <p className="glow-text-on-hover">{header}</p>
        <p
          className="glow-text-on-hover"
          style={{ textAlign: "center", fontSize: "12px" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;

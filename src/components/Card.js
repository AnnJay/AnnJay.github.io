import React from "react";

export const Card = ({id, title, content }) => {
  return (
    <div className="simple-card">
      <h3>{`${title} ${id}`}</h3>

      <p>{content}</p>

      <button>Click me</button>
    </div>
  );
};

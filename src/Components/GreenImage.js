import React from "react";

function GreenImage({ variant = 1 }) {
  const className = `Green${variant}`;
  return <div className={className}></div>;
}

export default GreenImage;


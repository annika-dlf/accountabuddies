import React from "react";
import { useLocation } from "react-router-dom";

function Charac() {
  const location = useLocation();

  // Normalize the pathname and handle edge cases
  let pageName = location.pathname
    .toLowerCase()         // lowercase just in case
    .replaceAll("/", "");  // remove all slashes

  // Default to "app" if the pathname is empty (root path)
  if (!pageName) pageName = "app";

  const className = `charac_${pageName}-green`;

  return <div className={className}></div>;
}

export default Charac;

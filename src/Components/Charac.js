// Charac.js
import React from "react";
import { useLocation } from "react-router-dom";

function Charac({ overrideClass }) {
  const location = useLocation();

  // Default behavior — detect class from current page
  let pageName = location.pathname
    .toLowerCase()
    .replaceAll("/", "");

  if (!pageName) pageName = "app";

  const defaultClass = `charac_${pageName}-green`;

  // ✅ Use override if provided, otherwise default
  const className = overrideClass || defaultClass;

  return <div className={className}></div>;
}

export default Charac;


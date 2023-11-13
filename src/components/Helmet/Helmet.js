import React from "react";

const Helmet = (props) => {
  document.title = "Jannat Travels | Cabs | Tours | Taxi |"
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;

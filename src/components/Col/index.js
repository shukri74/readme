import React from "react";

function Col(props) {
  // const size = props.size.split(" ").map(size => "is-" + size).join(" ");

  // return <div className={size}>{props.children}</div>;
  return <div className="columns is-full">{props.children}</div>;
}

export default Col;

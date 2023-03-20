import React from "react";

function Col(props) {
  // const size = props.size.split(" ").map(size => "is-" + size).join(" ");

  // return <div className={size}>{props.children}</div>;
  return <div class="columns is-full">{props.children}</div>;
}

export default Col;

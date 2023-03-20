import React from "react";

function Row(props) {
  return (
  // <div className="row">{props.children}</div>
  <div class="columns">{props.children}
  </div>
);
}

export default Row;

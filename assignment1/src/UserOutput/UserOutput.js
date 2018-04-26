import React from "react";

import "./UserOutput.css";

const useroutput = props => {
  return (
    <div className="UserOutput" onClick={props.click}>
      <p>Username: {props.userName}</p>
      <p>****</p>
      <hr />
    </div>
  );
};

export default useroutput;

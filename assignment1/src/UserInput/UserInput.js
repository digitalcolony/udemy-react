import React from "react";

import "./UserInput.css";

const userinput = props => {
  const inputStyle = {
    border: "2px solid red"
  };
  return (
    <div className="UserInput">
      <input
        type="text"
        onChange={props.changed}
        style={inputStyle}
        value={props.currentName}
      />
    </div>
  );
};

export default userinput;

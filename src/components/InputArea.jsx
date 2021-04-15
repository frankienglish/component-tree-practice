import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.eHandler} type="text" value={props.iText} />
      <button onClick={props.itemAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

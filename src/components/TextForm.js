import React, { useState } from "react";

const TextForm = (props) => {

  const handelUpClick = () => {
    let newText= text.toUpperCase();
    setText(newText);
  };

  const handelOnChange= (event)=>{
    setText(event.target.value);
  };
  const [text, setText]= useState('Enter text here');

  return (
    <div>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea rows="8" id="my-box" className="form-control" style={props.mode==='light'?{backgroundColor: 'white'}:{backgroundColor: 'black'}}></textarea>
      </div> 
      <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercase</button>
    </div>
  );
};

export default TextForm;

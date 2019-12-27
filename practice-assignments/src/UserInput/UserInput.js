import React from 'react';
// import './UserInput.css';

const userInput = ( props ) => {
  return (
    <div className="userInput">
      <input type="text" onChange={props.changed} value={props.userName}/>
    </div>
  );
};

export default userInput;
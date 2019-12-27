import React from 'react';
import './charComponent.css'

const charComponent = ( props ) => {
  return (
  <p className="char" onClick={props.changed}>{props.letter}</p>
  )}


export default charComponent;
import React from 'react';
import { Spacing , FontDecoration, FontTransform, FontColor } from '../styles/FontStyle.js';
import { ButtonType } from '../styles/ButtonStyle.js'

/**
 * @author  Eddy van Haastert
 * @function Button
 **/

const Button = (
    { 
      children , 
      clicked , 
      type ,
      spacing ,
      fontDecoration , 
      hollow , 
      size , 
      control ,
      color
    }
  ) => {

  /** Clean up the talwindcss code if props are unused  **/
  let colors;
  if( !color ) {
    colors = "current"
    } else {
    colors = color
    };

  let controls;
  if( !controls ) {
    controls = "normal"
    } else {
    controls = control
    };

  let fontDecorations;
  if( !fontDecoration ) {
    fontDecorations = "basic"
    } else {
    fontDecorations = fontDecoration
    };

  /** Asign all imported styles to classNames. Make sure to have + " " + in between them.  **/
  const classNames = Spacing[spacing] +" "+ ButtonType[type] +" "+ FontDecoration[fontDecorations] +" "+ FontTransform[controls] +" "+ FontColor[colors];

  return <button onClick={clicked} className={classNames} >{children}</button>;
    
  };

export default Button;
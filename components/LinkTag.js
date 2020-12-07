import React from "react";
//import Link from 'next/link';

import { FontSize, FontTransform, FontDecoration }  from '../styles/FontStyle.js'
import { State } from '../styles/Transform.js'

/**
 * @author Eddy van Haastert
 * @function Link
 **/

const LinkTag = ({ title, clicked, type, size, control, state, name, deco, icon, pathname, as }) => {

const classNames =  State[state] + " " + FontSize[size] + " " + FontTranform[control] + " " + FontDecoration[deco];
  
  return (

      <p className={classNames}>{name}</p>

  );
};

export default LinkTag;
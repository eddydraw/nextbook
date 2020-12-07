import { 
  Font ,
  Spacing ,
  TextAlignment ,
  FontDecoration , 
  FontSize , 
  FontTransform , 
  FontColor , 
  FontWeight } from '../styles/FontStyle.js';

/**
 * @author  Eddy van Haastert
 * @function Heading
 **/

const Heading = ({ 
  font ,
  spacing , 
  align ,
  title , 
  clicked , 
  type , 
  point , 
  transform , 
  color , 
  decoration , 
  weight 
  }) => {

    /** Clean up the talwindcss code if props are unused  **/
  let textAlignments;
  if( !align ) {
    textAlignments = "left"
  } else {
    textAlignments = align
    };
  let headingTypes;
  if( !type ) {
    headingTypes = " "
  } else {
    headingTypes = type
    };

  let fontPoints;
  if( !point ) {
    fontPoints = "xlarge"
  } else {
    fontPoints = point
    };

  let fontDecorations;
  if( !decoration ) {
    fontDecorations = "basic"
  } else {
    fontDecorations = decoration
    };

  let fontTransforms;
  if( !transform ) {
    fontTransforms = "normal"
  } else {
    fontTransforms = transform
    };

  let fontColors;
  if( !color ) {
    fontColors = "current"
  } else {
    fontColors = color
    };

  let fontWeights;
  if( !weight ) {
    fontWeights = "medium"
  } else {
    fontWeights = weight
    };

/** Asign all imported styles to classNames. Make sure to have + " " + in between props.  **/
  const classNames = Spacing[spacing] +" "+ Font[font] +" "+ TextAlignment[textAlignments] + " " + FontDecoration[fontDecorations] + " " + FontSize[fontPoints] + " " + FontTransform[fontTransforms] + " " + FontColor[fontColors] + "  " + FontWeight[fontWeights];

  return (
    <h1 onClick={clicked} className={classNames}>{title}</h1>
  );
    
};

export default Heading;
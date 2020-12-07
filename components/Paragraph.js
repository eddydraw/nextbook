import {
    TextAlignment,
    FontDecoration, 
    FontSize, 
    FontTransform, 
    FontColor
    }  from '../styles/FontStyle.js';

/**
 * @author  Eddy van Haastert
 * @function Paragraph
 **/

const Paragraph = ({ title, clicked, type, size, control, color, children , textAlignment }) => {

    let textAlignments;
    if( !textAlignment ) {
        textAlignments = "left"
    } else {
        textAlignments = textAlignment
        };

    const classNames = TextAlignment[textAlignments] + " " + FontDecoration[type] + " " + FontSize[size] + " " + FontTransform[control] + " " + FontColor[color] + " mb-8";

    return (
        <p onClick={clicked} className={classNames}>{children}</p>
    );
    
};

export default Paragraph;
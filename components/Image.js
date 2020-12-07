import { Size } from '../styles/ImageStyle'

/**
 * @author Eddy van Haastert
 * @function Image
 **/
 
const Image = ( { image , alt ,  size , width , height }) => {

    const classNames = Size[size];

    return (
        <div className ={classNames} >
            <img className="object-cover object-center rounded" alt="hero" src={image} alt={alt} width={width} height={height} />
        </div>
    );
};

export default Image;
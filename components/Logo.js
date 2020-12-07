import Heading from './Heading'
import Image from "./Image"

/**
 * @author Eddy van Haastert
 * @function Logo
 **/

const Nav = ({ brandName , point , size , image }) => {
    return (
        <a >
            <Image size={size} image={image} />
            <Heading title={brandName} point={point} />
        </a>
    );
};

export default Nav;
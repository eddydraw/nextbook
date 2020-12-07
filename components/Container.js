import { Types  } from '../styles/ContainerStyle.js'

const Container = ( { children , type , float } ) => {

    const classNames = Types[type];

    return (
        <div className = {classNames} >
            {children}
        </div>
    );
};

export default Container;
import { InpuType } from '../styles/InputStyle'
import { Font, Spacing } from '../styles/FontStyle.js';

/**
 * @author Eddy van Haastert
 * @function Input
 **/

const Input = ( { type , font , spacing } ) => {

    const classNames = Spacing[spacing] +" "+ InpuType[type] +" "+ Font[font]

    return (
        <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
            <label htmlFor="email" className={"leading-7 text-sm text-gray-600" +" "+ Spacing[spacing]}>Email</label>
            <input className={classNames} type="text" id="fname" name="fname" placeholder="Write your email address here"></input>
        </div>
    );
};

export default Input;
/**
 * @author  Eddy van Haastert
 **/ 

const padding = "tablet:px-20 mobile:px-5" + " "

export const Types = {
    titleBookPage: "container mx-auto flex space-y-16 mobile:px-8 tablet:px-28 mobile:mt-24 tablet:mt-40 flex-col",
    basic: padding +  "container mx-auto flex py-24 flex-col z-50 overflow-y-hidden text-justify h-fullheight",
    pd20: padding + "container mx-auto flex py-20 flex-col z-50 overflow-y-hidden text-justify h-fullheight",
    pd16: padding + "container mx-auto flex py-16 flex-col z-50 overflow-y-hidden text-justify h-fullheight",
    pd8: padding +  "container mx-auto flex py-8 flex-col z-50 overflow-y-hidden text-justify h-fullheight",
    pd5: padding +  "container mx-auto flex py-5 flex-col z-50 overflow-y-hidden text-justify h-fullheight",
    pd: padding +  "container mx-auto flex flex-col z-50 overflow-y-hidden text-justify h-fullheight",
    floating: "absolute mx-auto justify-evenly flex px-5 flex-row left-0 right-0 h-bookH lg:w-small md:w-small sm:w-full z-0",
    column: "md:w-2/3 mx-auto sm:flex-row md:px-0 sm:px-0",
    row: "flex justify-evenly md:w-2/4 mx-auto sm:w-full sm:px-0",
    list: "container mx-auto flex py-16 flex-col",
    center: "container mx-auto flex px-5 py-24 flex-col items-center sm:px-0",
    group: "md:flex md:flex-row md:w-4/5 lg:w-5/12 mx-auto items-end py-5 sm:flex-col sm:w-full sm:px-0",
    brand: "flex justify-center title-font font-medium items-center text-gray-900 m-4 md:mb-0 sm:px-0"
    };

export const Brand = {
    pd8: "container mx-auto flex px-5 py-8 flex-col",
    pd5: "container mx-auto flex px-5 py-5 flex-col",
    };
    
export const Breakpoint = {
    small: "sm:flex-row",
    medium: "md:flex-row",
    large: "lg:flex-row",
    xlarge: "xl:flex-row"
    }
    
export const Headlines = "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center";
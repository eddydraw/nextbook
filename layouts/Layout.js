//import { useState } from 'react';
//import { useForm } from "react-hook-form"
import Head from 'next/head'

import { Paper } from '../styles/BackgroundStyle'

const Layout = ({ children }) => {

    //const [ paperColor, setPaperColor ] = useState("default");
    //const { register, handleSubmit, data } = useForm();

    //const onSubmit = (data) => {
    //    setPaperColor(data.paper)
    //    };

    const classNames = Paper.littleGreen + " " + "mx-auto mobile:h-full mobile:w-full tablet:w-bookW tablet:h-bookH";

    return (
        <div className = "flex bg-gray-default items-center h-full" >
            <Head>
                <title>Les petites histoires</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" /> 
            </Head>
            <div className={classNames}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
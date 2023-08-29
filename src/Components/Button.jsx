/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Button = ({handler, children}) => {

    return (
        <button className='bg-indigo-400 text-white px-3 rounded shadow' onClick={handler}>
            {children}
        </button>
    );
};

export default Button;
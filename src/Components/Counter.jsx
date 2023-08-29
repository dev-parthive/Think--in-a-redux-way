// eslint-disable-next-line no-unused-vars
import React from 'react';
import Count from './Count';
import Button from './Button';
// eslint-disable-next-line react/prop-types
const Counter = ({id, increment, decrement, count}) => {
    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
            <Count count={count}></Count>

            <div className='flex space-x-3'>
                <Button handler={()=>increment(id)}>increment</Button>
                <Button handler={()=>decrement(id)}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;
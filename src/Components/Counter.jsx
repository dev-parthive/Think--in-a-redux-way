import React, { useState } from 'react';
const Counter = () => {
const [count,setCount] = useState(0)
const increment = () =>{
    setCount((prevCount) => prevCount + 1)
}
const decrement = () =>{
    setCount((prevCount) => prevCount - 1)
}
    return (
        
        <div className="max-w-md mx-auto mt-10 space-y-5">
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold " id="value">{count}</div>
            <div className="flex space-x-3">
                <button onClick={increment} id="increment-btn"
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                >
                    Increment
                </button>
                <button onClick={decrement} id="decrement-btn"
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                >
                    Decrement
                </button>
            </div>
        </div>
    </div>
    );
};

export default Counter;
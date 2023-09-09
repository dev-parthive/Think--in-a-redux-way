// / selecte dom elements 
const counter = document.getElementById("counter")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")

// initial state 
const initailState  = {
    value : 0 , 

};
//  Create Reducer function 
function counterReducer(state = initailState , action ){
    action =  {
        type: "increment"
    }
    if(action.type === "increment"){
        return {...state , value : state.value + 1};
    } 
    else if (action.type === "decrement"){
        return {...state , value : state.value - 0 }
    }else{
        return state;
    }
}


// create store  
const store = Redux.createStore(counterReducer)
console.log(store);


// button click listener 



// / selecte dom elements 
const counter = document.getElementById("counter")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")



// initial state 
const initailState  = {
    value : 0 

};
//  Create Reducer function 
function counterReducer(state = initailState , action ){
    if(action.type === "increment"){
        console.log("value of state", state)
        return {...state , value : state.value + 1};
    } 
    else if (action.type === "decrement"){
        return {...state , value : state.value - 1 }
    }else{
        return state;
    }
}


// create store 
const store = Redux.createStore(counterReducer)
// here is the render function 
const render = () => {
    const state = store.getState();
    counter.innerText = state.value.toString()
    console.log(state.value)
}
render()
// render function subscribed to the store 
store.subscribe(render)


// button click listener 
incrementBtn.addEventListener("click", ()=>{
    store.dispatch({
        type: "increment"
    })

    console.log("button is clicked");
})

decrementBtn.addEventListener("click", ()=>{
    store.dispatch({
        type: "decrement"
    })
    console.log("Decrement Button is clicked ")
})
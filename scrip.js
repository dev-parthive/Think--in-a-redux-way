const counter = document.getElementById("counter")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")

/// action identifiers 


const   INCREMENT  = "increment"
const DECREMENT =   "decrement"

//initial State 
const  initialState = {
    value : 200
}

// action creators  
const increment  = (value) =>{
    return {type: INCREMENT , payload : {
        value: value
    }}
}

const decrement = (value) =>{ 
    return {type: DECREMENT , payload: {
    value: value
}}
}

/// create Reducer function 

function counterReducer(state = initialState, action){
    if(action.type === INCREMENT){
        return{...state, value: state.value + action.payload.value}
    }else if (action.type === DECREMENT){
        return {...state , value: state.value - action.payload.value }
    }else{
        return state;
    }

}


//create store 

const store = Redux.createStore(counterReducer)

//here is the render fucntion 

const render = () =>{
    const state = store.getState()
    counter.innerText = state.value.toString()
    console.log(state.value)
}


render()


// render function subscribed to the store 


store.subscribe(render)

/// button click listener 


incrementBtn.addEventListener("click" , ()=>{
    store.dispatch(increment(8))
})

decrementBtn.addEventListener("click", ()=>{
    store.dispatch(decrement(4))
})
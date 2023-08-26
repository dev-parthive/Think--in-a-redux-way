// select dom elements 

const decrementBtn  = document.getElementById("decrement-btn")


const incrementBtn  = document.getElementById("increment-btn")

const number = document.getElementById("value")

// initial value 
let count =  0 ;


// eventListener 
incrementBtn.addEventListener('click', () =>{
    count++; 
    number.innerHTML = count;
})
decrementBtn.addEventListener("click", ()=>{
    count --;
    number.innerText = count;
})
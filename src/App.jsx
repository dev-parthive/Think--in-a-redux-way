
import { useState } from 'react';
import './App.css'
import Counter from './Components/Counter'
import State from './Components/State';
function App() {

  const initialState = [
  {
    id: 1, 
    count: 0
  }, 
  {
    id: 2, 
    count: 0
  }, 
  
]; 
const  [state , setState] = useState(initialState);
const totalCount = ()=>{
  return state.reduce((total , counter) =>{
    return total + counter.count} , 0 )
}
totalCount()

const increment = (id) =>{
  const updatedConter = state.map(c => {
    if(c.id === id){
      return {
        ...c , 
        count: c.count + 1,
      };
    }
    return {...c}
  }) 

  setState(updatedConter)


}


const decrement = (id) =>{
  const updatedConter = state.map(c => {
    if(c.id === id){
      return {
        ...c , 
        count: c.count - 1,
      };
    }
    return {...c}
  }) ;
  setState(updatedConter)


}
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>Simple Counter Application </h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>

   {state.map(count =>{
    return  <Counter key={count.id} id={count.id} increment={increment} decrement={decrement} count={count.count}></Counter>
   })}
    
    <State count={totalCount()}></State>


      </div>
</div>
  )
}

export default App

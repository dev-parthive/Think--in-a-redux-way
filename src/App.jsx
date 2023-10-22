import { Provider } from 'react-redux';
import { useState } from 'react';
import './App.css'
import Counter from './Components/Counter'
import State from './Components/State';
import store from './Redux/store';
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
  const updatedCounter = state.map(c => {
    if(c.id === id){
      return {
        ...c , 
        count: c.count + 1,
      };
    }
    return {...c}
  }) 

  setState(updatedCounter)


}


const decrement = (id) =>{
  const updatedCounter = state.map(c => {
    if(c.id === id){
      return {
        ...c , 
        count: c.count - 1,
      };
    }
    return {...c}
  }) ;
  setState(updatedCounter)


}
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            
            <h1 className="max-w-md mx-auto text-center  text-2xl font-bold">
                Simple Counter Application
            </h1>

            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
        </div>

    
    )
}

export default App

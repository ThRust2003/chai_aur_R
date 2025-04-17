import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fun=() => setCount( count + 1)
  return (
    <>
      <div>
      
      </div>
       
      <div className="card">
        {/* <button onClick={fun}>
         {count}
        </button>                       //since its all passed in batch so react cnsider all this to be repettive
        */}
        <button onClick={()=>{
          setCount(p=>p+1)
          setCount(p=>p+1)
          setCount(p=>p+1);
          setCount(p=>p+1)
          }}>
         {count}
        </button>                     
        {
          //since a prev value is applied so it take in consideration about values of each 
        }  
        {
          // Using setCount(p => p + 1) multiple times:

          // ✅ Each update uses the latest value.
          
          // ✅ All are applied correctly, even if batched.
          
          // 👉 setCount(p => p + 1) x4 → increases count by 4.
          
          // Using setCount(count + 1) multiple times:
          
          // ❌ React may batch updates with the same stale value.
          
          // 👉 setCount(count + 1) x4 → increases count by just 1.
        }
       
      </div>
     
    </>
  )
}

export default App

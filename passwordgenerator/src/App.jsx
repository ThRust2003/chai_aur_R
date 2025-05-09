import { useState,useCallback,useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState("")
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const char="!@#$%^&*(_)+{}><?|,.~`";
  const number="1234567890";
  const passwordRef=useRef(null)
  const pas=useCallback(()=>{
    let password="";
    if(numallow)string+=number;
    if(charAllow)string+=char;
    for(let i=1;i<=length;i++){
    let index=Math.floor(Math.random()*string.length+1)
    password+=string.charAt(index)
  }
  setPass(password);
    },[length,charAllow,numallow])
    const passToClip=useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(1,6);
      
     window.navigator.clipboard.writeText(pass)
    },[pass])
useEffect(()=>{pas()},[length,numallow,charAllow,pas])
  return (
   
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={passToClip}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numallow}
          id="numberInput"
          onChange={() => {
              setNumallow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setCharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App

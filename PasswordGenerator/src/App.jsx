import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [pass, setPass] = useState("")
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)

  const passwordRef = useRef(null)
  const passwordCopyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (specialChar) str += "!@#$%^&*()_+=[]{}<>~`";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }

    setPass(password)

  }, [length, numberAllow, specialChar, setPass])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,specialChar,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input
               type="text" 
               value={pass}
               className='outline-none w-full py-1 px-3'
               placeholder='Password'
               readOnly
               ref={passwordRef}
               />
               <button onClick={passwordCopyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={()=>{
              setNumberAllow((prev)=>!prev)
            }}
             />
             <label htmlFor="">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={specialChar}
                id='characterInput'
                onChange={()=>{
                  setSpecialChar((prev)=>!prev)
                }}
                 />
                 <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

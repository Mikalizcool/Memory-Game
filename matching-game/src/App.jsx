import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const clickHandler = (event) => {
  
}
function App() {
  const [count, setCount] = useState(0)
  const boxes = [1, 2, 3, 4, 5];
  return (
    <>
      <div>
        <div className="flex flex-row flex-wrap">
          {boxes.map((box) => {
            return (
              <div key={box} className=" cursor-pointer m-4 border-solid border-4 w-80 h-80 border-black flex flex-wrap flex-row" onClick={clickHandler} >
                {box}
              </div>
            )
          })}
        </div>
      </div>
      
    </>
  )
}

export default App

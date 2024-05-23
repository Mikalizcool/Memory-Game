import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [images, setImages] = useState([
  {id: 1, clicked: "false"}, {id: 2, clicked: "false"}, {id: 3, clicked: "false"}, {id: 4, clicked: "false"}, {id: 5, clicked: "false"},
  {id: 6, clicked: "false"}, {id: 7, clicked: "false"}, {id: 8, clicked: "false"}, {id: 9, clicked: "false"}, {id: 10, clicked: "false"}
 ]);
  
  return (
    <div className="flex flex-row flex-wrap">
      {images.map((image) => (
        <div className="block w-1/5 h-40 border-4 ">
          
        </div>
      ))}
    </div>
  )
}

export default App

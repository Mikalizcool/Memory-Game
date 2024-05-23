import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [images, setImages] = useState([
  {id: 1, clicked: "false"}, {id: 2, clicked: "false"}, {id: 3, clicked: "false"}, {id: 4, clicked: "false"}, {id: 5, clicked: "false"},
  {id: 6, clicked: "false"}, {id: 7, clicked: "false"}, {id: 8, clicked: "false"}, {id: 9, clicked: "false"}, {id: 10, clicked: "false"}
 ]);

 const imageList = ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400",
 "https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"
 ];
  
 const handleClick = (image) => {
  console.log("hi");
 }
 
  return (
    <div className="flex flex-row flex-wrap">
      {images.map((image) => (
        <div key={image.id} className="block w-1/5 h-40 border-4" onClick={() => handleClick(image)}>
          <img src={imageList[image.id-1]}></img>
        </div>
      ))}
    </div>
  )
}

export default App

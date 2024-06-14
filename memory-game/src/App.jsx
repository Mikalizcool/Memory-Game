import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [wins, setWins] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [images, setImages] = useState([]);
    
  const handleClick = (image, id) => {
    if (image.clicked == true){
      setWins(0);
      handleDefeat();
    }
    else {
      setWins(wins+1);
      if (bestScore < wins+1){
        setBestScore(wins+1);
      }
      setImages(images.map(image => {
        if (image.id == id){
          return { ...image, clicked: true}
        }
        else{
          return image;
        }
      }))
    }
   }
   
   useEffect(() => {
    async function fetchImages() {
      try {
        // Fetch images from the API
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8');
        // Convert the response to JSON
        const data = await response.json();
        // Store the full character objects in the state
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    
    fetchImages();
    
    const shuffledImages = JSON.parse(JSON.stringify(images));
    shuffleArray(shuffledImages);
    setImages(shuffledImages);
}, [wins]);

  function shuffleArray(array) {
      array.sort(() => Math.random() - 0.5);
  }

   const handleDefeat = () => {
    const shuffledImages = [...images];
    shuffledImages.reverse();
    setImages(shuffledImages.map(image => {
      return { ...image, clicked: false}
    }))
   }
  return (
    <>
      <div className="app">
        <Header wins={wins} bestScore={bestScore}/>
        <div className="cardsContainer">
          {images.map((image) => (
            <div key={image.id} className="characterContainer" onClick={() => handleClick(image, image.id)}>
              <img className="character" src={image.image}></img>
              <p className="name">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

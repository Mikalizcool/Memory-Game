import { useState, useEffect } from 'react'
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
        if (image.id === id){
          return { ...image, clicked: true}
        }
        else{
          return image;
        }
      }))
    }
   }
   
   useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,15');
        const data = await response.json();
        const charactersClicked = data.map(character => ({ ...character, clicked: false }));
        setImages(charactersClicked);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    
    fetchImages();
    
    
  }, []);

    useEffect(() => {
      const shuffledImages = [...images];
      shuffleArray(shuffledImages);
      setImages(shuffledImages);
    },[wins])

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

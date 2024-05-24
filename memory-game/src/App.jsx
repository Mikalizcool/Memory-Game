import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [wins, setWins] = useState(0);
  const [images, setImages] = useState([
    {id: 1, clicked: false, name: "Morty"}, {id: 2, clicked: false, name: "Rick"}, {id: 3, clicked: false, name: "Jerry"}, {id: 4, clicked: false, name: "Summer"}, {id: 5, clicked: false, name: "Beth"},
    {id: 6, clicked: false, name: "Jessica"}, {id: 7, clicked: false, name: "Birdperson"}, {id: 8, clicked: false, name: "Squanchy"}, {id: 9, clicked: false, name: "Miggs"}, {id: 10, clicked: false, name: "Ethan"},
    {id: 11, clicked: false, name: "Lady Katana"}, {id: 12, clicked: false, name: "Vance"}
  ]);

  const imageList = ["https://comicvine.gamespot.com/a/uploads/square_small/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/6/66303/4469093-screen%20shot%202015-03-25%20at%205.13.24%20pm%20copy.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/6/66303/4472081-tumblr_n04lnrmooh1rfbbc6o1_1280.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/6/66303/4472085-summer_in_ricksy_business.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/6/66303/4472083-vlcsnap-2015-01-31-18h46m55s179.jpg",
  "https://comicvine.gamespot.com/a/uploads/square_small/8/83918/5942295-jessica.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/11130/111306302/5721945-birdperson%27s%20head.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/11/110802/7975577-squanchy.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/8/83918/6336441-miggs.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/11/110802/7976419-ethan.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/13/135098/9335550-katana.jpg", "https://comicvine.gamespot.com/a/uploads/square_small/13/135098/9335557-vance.jpg"
  ];
    
  const handleClick = (image, id) => {
    if (image.clicked == true){
      setWins(0);
      handleDefeat();
    }
    else {
      setWins(wins+1);
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
    const shuffledImages = [...images];
    shuffledImages.reverse();
    setImages(shuffledImages);
   }, [wins])
   
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
        <Header wins={wins} />
        <div className="cardsContainer">
          {images.map((image) => (
            <div key={image.id} className="characterContainer" onClick={() => handleClick(image, image.id)}>
              <img className="character" src={imageList[image.id-1]}></img>
              <p className="name">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
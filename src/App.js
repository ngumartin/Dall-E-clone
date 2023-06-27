import { useState } from "react"

const App = () => {
  const [images, setImages] = useState(null)
  const surpriseOptions = [
    'A dwarf paladin warrior heavily plated in armor, realistic high definition image',
    'A orc warrior berserker, realistic high definition image',
    'A human mage, realistic high definition image'
  ]

  const getImages = async() => {
    try {
        const options = {
          method: "POST",
          body: JSON.stringify({
            message: "GGGG"
          }),
          headers: {
            "Content-type": "application/json"
          }
        } 
        const response = await fetch('http://localhost:8000/images', options)
        const data = await response.json()
        console.log(data)
        setImages(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="app">
      <section className="search-section">
        <p>Write a detailed description 
          <span className="surprise">Surprise Me</span>
        </p>
        <div className="input-container">
          <input 
            placeholder="Let's bring your thoughts to images"
          />            
          <button onClick={getImages}>Generate</button> 
        </div>
      </section>
      <section className="image-section">
        {images?.map((image, _index) => (
          <img key={_index} src={image}/>
        ))}
      </section>
    </div>
  )
}

export default App

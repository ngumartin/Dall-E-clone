
const App = () => {
  const surpriseOptions = [
    'A dwarf paladin warrior heavily plated in armor, realistic high definition image',
    'A orc warrior berserker, realistic high definition image',
    'A human mage, realistic high definition image'
  ]

  return (
    <div className="app">
      <section className="search-section">
        <p>Write a detailed description 
          <span className="surprise">Surprise Me</span>
        </p>
        <div className="input-container">
          <input 
            placeholder="A dwarf paladin warrior heavily plated in armor, realistic high definition image..."
          />            
          <button>Generate</button> 
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  )
}

export default App

import React, {useState, useCallback} from 'react'
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  // Proceed only if changed count
  const generateItemsFromApi = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + indexNumber}`)
  }, [count])

  return (
    <>
      <h1 style={styles}> Computed property: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1 )}>Add</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev )}>Change Color</button>
      <ItemsList getItems={generateItemsFromApi}/>
    </>
  )
}

export default App;

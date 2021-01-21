import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num){
  console.log('ComplexCompute')
  let  i = 0
  while(i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // Dependent from the colored state
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  // Isolate number clculating from another changes
  // Runing only if using number state changing
  const computed = useMemo(() => {
    return complexCompute(number)
  },[number])

  // Watch for the styles changing
  useEffect(() => {
    console.log('Style Changed')
  }, [styles])


  return (
    <>
      <h1 style={styles}> Computed property: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1 )}>Add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1 )}>Remove</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev )}>Change Color</button>
    </>
  )
}

export default App;

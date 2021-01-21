import React, {useState} from 'react'

function computeInitialCounter() {
  console.log('Some calculations...')

  return Math.trunc(Math.random() * 20)
}

function App() {
  // This solution running every render or state changed
  // const [counter, setCounter] = useState(computeInitialCounter())

  // This solution running only once, on init
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  // Object State
  // ! but instead better use separated states
  const [state, setState] = useState({
    title: 'Counter!',
    date: Date.now()
  })

  function increment() {
    setCounter(prev => prev + 1)
  }

  function decrement() {
    setCounter(prev => prev - 1)
  }

  // Change object State
  function updateTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'Change Title'
      }
    })
  }

  return (
    <div className={'pt-3'}>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className={'btn btn-success'}>Upper</button>
      <button onClick={decrement} className={'btn btn-danger'}>Downer</button>
      <button onClick={updateTitle} className={'btn btn-warning'}>Change title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;

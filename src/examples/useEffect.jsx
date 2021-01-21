import React, {useState, useEffect} from 'react'

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })
  // INFO: http://jsonplaceholder.typicode.com/
  console.log('Component render...')

  // Running every render, but not rerender if state isn't changed
  // Watch every render of component
  // useEffect(() => {
  //   console.log('render')
  // })
  // Running but only if type changed
  // !Using for side effects
  useEffect(() => {
    console.log('Type change', type)

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('Clean type')
    }

  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  // componentDidMount
  // !Emulate lifecycle hooks
  // Add listener
  useEffect(()=>{
    console.log('ComponentDidMount')
    // Init listener
    window.addEventListener('mousemove', mouseMoveHandler)
    // Remove listener
    // Called when component will remove
    return () => {
      window.removeEventListener(mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Source: {type}</h1>
      <button onClick={()=>{setType('users')}}>Users</button>
      <button onClick={()=>{setType('todos')}}>Todo</button>
      <button onClick={()=>{setType('posts')}}>Posts</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

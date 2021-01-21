import React, {useState} from 'react'

function App() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const changeHandler = event => {
    setName(event.target.value)
  }
  const lastNameHandler = event => {
    setLastName(event.target.value)
  }


  return (
    <div className={'container pt-3'}>
      <input type='text' value={name} onChange={changeHandler}/>
      <input type='text' value={lastName} onChange={lastNameHandler}/>
      <hr />
      <h1>{name} {lastName}</h1>
    </div>
  );
}

export default App;

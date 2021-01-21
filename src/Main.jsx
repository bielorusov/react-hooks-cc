import React from 'react'

import {useAlert} from "./alert/AlertContext";

export default function Main() {
  const {show} = useAlert()

  return (
    <>
      <h1>Hi  in context example</h1>
      <button onClick={() => show('This text from Main.jsx')} className={'btn btn-success'}>Show Alert</button>
    </>
  )
}
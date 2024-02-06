import * as React from "react"

import "./App.module.css"

import Login from "../Login/Login"
import Signup from "../Signup"

function App() {
  const [message, setMessage] = React.useState({})
  React.useEffect(() => {
    fetch("http://localhost:5500")
      .then((res) => res.json)
      .then((data) => setMessage(data))
  })


  return (
    <>
      <div>
        <Login/>
        <Signup/>
      </div>
    </>
  )
}

export default App

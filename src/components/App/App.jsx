import * as React from "react"

import "./App.module.css"

import Login from "../Login/index"
import Signup from "../Signup/index"
import Accounts from "../Accounts/index"

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
        <Accounts/>
      </div>
    </>
  )
}

export default App

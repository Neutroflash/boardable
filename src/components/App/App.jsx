import * as React from "react"
import Router from "../../router";

import "./App.module.css"

import Login from "../Login/index"
import Signup from "../Signup/index"
import Accounts from "../Accounts/index"
import Menu from "../Menu/index"

function App() {
  const [message, setMessage] = React.useState({})
  React.useEffect(() => {
    fetch("http://localhost:5500")
      .then((res) => res.json())
      .then((data) => setMessage(data))
  })


  return (
    <>
      <div>
        <Router/>
      </div>
    </>
  )
}

export default App

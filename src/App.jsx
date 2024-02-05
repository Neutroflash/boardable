import * as React from "react"

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
        <p>Hola Mundo!</p>
      </div>
    </>
  )
}

export default App

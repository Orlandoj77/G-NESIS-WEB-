import { useState } from 'react'
import Header from "./components/header/header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1>
     Hello G'NESIS
   </h1>
    </>
 
  )
}

export default App

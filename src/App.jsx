import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Vocab} from './vocabList.js'
function App() {
  const [count, setCount] = useState(0)
  const randomNum=Math.floor(Math.random()*Math.floor(Vocab.length))
  return (
    
    <div className="App">
      <h1>{Vocab[randomNum].FIELD1}</h1>
      <h3>{Vocab[randomNum].FIELD2}</h3>
    </div>
  )
}

export default App

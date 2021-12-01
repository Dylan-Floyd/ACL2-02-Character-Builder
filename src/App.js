import { useState } from 'react'
import './App.css'
import Catchphrase from './components/Catchphrase/Catchphrase.jsx'
import Character from './components/Character/Character.jsx'
import Picker from './components/Picker/Picker.jsx'

function App() {
  const [catchphrases, setCatchphrases] = useState([])
  const [newCatchphrase, setNewCatchphrase] = useState('')
  const [head, setHead] = useState('bird')
  const [torso, setTorso] = useState('blue')
  const [legs, setLegs] = useState('blue')

  function addCatchphrase() {
    setCatchphrases((prevState) => [...prevState, newCatchphrase])
    setNewCatchphrase('')
  }

  return (
    <div className="App">
      <h1>Character Builder</h1>
      <div className='builder'>
        <div>
          <h3>Edit Your Character:</h3>
          <Picker { ...{
            head,
            setHead,
            torso,
            setTorso,
            legs,
            setLegs,
            addCatchphrase,
            newCatchphrase,
            setNewCatchphrase
          } } />
          <Catchphrase { ...{
            catchphrases
          } } />
        </div>
        <div>
          <h3>Your Character:</h3>
          <Character { ...{
            head,
            torso,
            legs
          } } />
        </div>
      </div>
    </div>
  )
}

export default App

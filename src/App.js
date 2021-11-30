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
      <Character { ...{
        head,
        torso,
        legs
      } } />
      <Picker { ...{
        head,
        setHead,
        torso,
        setTorso,
        legs,
        setLegs
      } } />
      <Catchphrase { ...{
        catchphrases,
        addCatchphrase,
        newCatchphrase,
        setNewCatchphrase
      } } />
    </div>
  )
}

export default App

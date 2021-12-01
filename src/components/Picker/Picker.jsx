import React from 'react'

import './Picker.css'

export default function Picker({
  head,
  setHead,
  torso,
  setTorso,
  legs,
  setLegs,
  addCatchphrase,
  newCatchphrase,
  setNewCatchphrase
}) {
  return (
    <div className='picker'>
      <label>
        Head:
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </label>
      <label>
        Torso:
        <select value={torso} onChange={(e) => setTorso(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </label>
      <label>
        Legs:
        <select value={legs} onChange={(e) => setLegs(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </label>
      <label>
        Add a Catchphrase:
        <input type="text" value={newCatchphrase} onChange={(e) => setNewCatchphrase(e.target.value)}></input>
        <button onClick={addCatchphrase}>Add</button>
      </label>
    </div>
  )
}

import React from 'react'

export default function Catchphrase({
  catchphrases,
  addCatchphrase,
  newCatchphrase,
  setNewCatchphrase
}) {
  return (
    <div>
      <label>
        Enter a Catchphrase:
        <input type="text" value={newCatchphrase} onChange={(e) => setNewCatchphrase(e.target.value)}></input>
        <button onClick={addCatchphrase}>Add</button>
      </label>
      <div>
        Catchphrases:
        {catchphrases.map(phrase => <p key={phrase}>{phrase}</p>)}
      </div>
    </div>
  )
}

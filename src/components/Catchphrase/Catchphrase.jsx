import React from 'react'

import './Catchphrases.css'

export default function Catchphrase({
  catchphrases
}) {
  return (
    <div className='catchphrases-container'>
      Catchphrases:
      <div className='catchphrases'>
        {catchphrases.map(phrase => <p key={phrase}>{phrase}</p>)}
      </div>
    </div>
  )
}

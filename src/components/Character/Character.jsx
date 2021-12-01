import React from 'react'

import './Character.css'

export default function Character({
  head,
  torso,
  legs
}) {
  return (
    <div>
      <div
        aria-label='head'
        className='char-img-div'
        style={{ backgroundImage: `url(./${head}-head.png)` }}
      />
      <div
        aria-label='torso'
        className='char-img-div'
        style={{ backgroundImage: `url(./${torso}-middle.png)` }}
      />
      <div
        aria-label='legs'
        className='char-img-div'
        style={{ backgroundImage: `url(./${legs}-pants.png)` }}
      />
    </div>
  )
}

import React from 'react'

const ScoreComponent = ({username, cards, score}) => {
  return (
    <div className='scoreRow'>
      <h1>{username}</h1>
      <h1 className='rightElementTwo'>{cards}</h1>
      <h1 className='rightElement'>{score}</h1>
    </div>
  )
}

export default ScoreComponent

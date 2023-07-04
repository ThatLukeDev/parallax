import React from 'react'

const ScoreComponent = ({username, cards, score}) => {
  const removeSelf = () => {
  }
  return (
    <div className='scoreRow'>
      <button className='squareBtn2 removeBorder' onClick={() => removeSelf()}>X</button>
      <h1>{username}</h1>
      <h1 className='rightElementTwo'>{cards}</h1>
      <h1 className='rightElement'>{score}</h1>
    </div>
  )
}

export default ScoreComponent

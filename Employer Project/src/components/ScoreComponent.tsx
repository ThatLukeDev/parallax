import React from 'react'

const ScoreComponent = ({username, cards, score}) => {
  const removeSelf = () => {
    document.getElementById(`scoreboardBody_${username}`)!.outerHTML = "";
    document.cookie = `PLAYER_${username}=; Max-Age=-99999999;`
  }
  return (
    <div className='scoreRow' id={`scoreboardBody_${username}`}>
      <h1 className='squareBtn2 removeBorder shiftDel' onClick={() => removeSelf()}><span class="material-symbols-outlined">delete</span></h1>
      <h1>{username}</h1>
      <h1 className='rightElementTwo'>{cards}</h1>
      <h1 className='rightElement'>{score}</h1>
    </div>
  )
}

export default ScoreComponent

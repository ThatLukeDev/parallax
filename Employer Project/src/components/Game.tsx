import React from 'react'
import Card from './Card'

const Game = () => {
  let cardsOnTable = [];
  for (let i = 0; i < 12; i++) {
    cardsOnTable[i] = Math.floor(Math.random() * 10)
  }
  return (
    <div className='cardHolder'>
        {cardsOnTable.map((card) => <Card contents={card}/>)}
    </div>
  )
}

export default Game
import React from 'react'
import Card from './Card'

const Game = () => {
  let cardsOnTable = [];
  for (let i = 0; i < 5; i++) {
    cardsOnTable[i] = Math.floor(Math.random() * (5 - 1) ) + 1;
  }
  const cardClicked = (cardKey:number) => {
    console.log(cardKey)
  }
  return (
    <div className='cardHolder'>
        {cardsOnTable.map((card, key) => <Card cardClicked={cardClicked} contents={card} number={key}/>)}
    </div>
  )
}

export default Game
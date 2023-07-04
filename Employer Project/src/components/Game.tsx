import React, { useEffect, useState } from 'react'
import Card from './Card'

const Game = () => {
  let cardsOnTable = [];
  let usedCards = [];
  const [cards, setCards] = useState<number[]>()
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      let randIndex = 0
      let randIndexTwo = 0
      do {
        randIndex = Math.floor(Math.random() * (10 - 1) ) + 1
      }  while (usedCards.includes(randIndex))
      do {
        randIndexTwo = Math.floor(Math.random() * (10 - 1) ) + 1
      } while (usedCards.includes(randIndexTwo) && randIndex != randIndexTwo)
      if (!usedCards.includes(randIndex) && !usedCards.includes(randIndexTwo) && randIndex != 0 && randIndexTwo != 0 && randIndex != randIndexTwo) {
        cardsOnTable[randIndex] = i;
        cardsOnTable[randIndexTwo] = i;
        usedCards[count] = randIndex;
        usedCards[count + 1] = randIndexTwo;
        count += 2
      }
    }
    console.log(usedCards)
    setCards(cardsOnTable)
    console.log(cardsOnTable)
  }, [])
  const cardClicked = (cardKey:number) => {
    console.log(cardKey)
  }


  return (
    <div className='cardHolder'>
        {cards ? cards.map((card, key) => <Card cardClicked={cardClicked} contents={card} number={key}/>) : null}
    </div>
  )
}

export default Game
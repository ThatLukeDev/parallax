import React, { useEffect } from 'react'
import Card from './Card'

const Game = () => {
  const findElement = (arrayTwo, searchFor) => {
    for (let j = 0; j < arrayTwo.Length; j++) {
      console.log(arrayTwo.length)
      if (arrayTwo[j] == searchFor) {
        return true
      }
    }
    return false
  }
  let cardsOnTable = [];
  let usedCards:number[] = []
  let usedIndexes:number[] = []
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      let randContent = 0
      do {
        randContent = Math.floor(Math.random() * (5 - 1) ) + 1
      } while (findElement(usedCards, randContent))
      usedCards.push(randContent)
      let randIndex = Math.floor(Math.random() * (10 - 1) ) + 1
      let randIndexTwo = Math.floor(Math.random() * (10 - 1) ) + 1
      cardsOnTable[randIndex] = randContent;
      cardsOnTable[randIndexTwo] = randContent;
    }
  }, [])
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
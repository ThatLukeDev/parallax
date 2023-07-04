import React, { useEffect, useState } from 'react'
import Card from './Card'

const Game = () => {
  let cardsOnTable = [];
  let usedCards = [];
  const [cards, setCards] = useState<number[]>()
  const [cardFlipped, setCardFlipped] = useState<number[]>()
  var selectedCard:number;
  var selectedKey:number;
  const [cardFlippedNo, setCardFlippedNo] = useState([])
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
    setCards(cardsOnTable)
    selectedCard = -1
    selectedKey = -1
  }, [])
  const cardClicked = (cardKey:number, key:number) => {
    setCardFlippedNo(cardFlippedNo => [cardFlippedNo, key])
    if (cardKey == selectedCard && cardFlippedNo.Length == 2) {
      setCardFlipped([cardKey, false])
      setCardFlippedNo([])
      console.error("Winner")
    }
    else if (cardFlippedNo == 2) {
      setCardFlippedNo([])
      setCardFlipped(["universalNo", false])
    }
    selectedCard = cardKey;
    selectedKey = key;
    console.error(cardFlippedNo)
  }


  return (
    <div className='cardHolder'>
        {cards ? cards.map((card, key) => <Card cardFlipped={cardFlipped} cardClicked={cardClicked} contents={card} number={key}/>) : null}
    </div>
  )
}

export default Game
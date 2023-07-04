import React, { useEffect, useState } from 'react'
import Card from './Card'

const Game = () => {
  let cardsOnTable = []
  let usedCards = []
  const [cards, setCards] = useState<number[]>()
  const [cardFlipped, setCardFlipped] = useState<number[]>()
  var selectedCard:number
  var selectedKey:number
  const [selectedCards, setSelectedCards] = useState(0)
  const [cardFlippedNo, setCardFlippedNo] = useState([])
  useEffect(() => {
    let count = 0
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
        cardsOnTable[randIndex] = i
        cardsOnTable[randIndexTwo] = i
        usedCards[count] = randIndex
        usedCards[count + 1] = randIndexTwo
        count += 2
      }
    }
    setCards(cardsOnTable)
    selectedCard = -1
    selectedKey = -1

  }, [])
  let arr = []
  const cardClicked = (cardKey:number, key:number) => {
    // console.warn(key)
    // arr.push(key)

    // if (cardKey == selectedCard) {
    //   setCardFlipped([cardKey, false])
    //   setCardFlippedNo([])
    //   console.error("Winner")
    // }

    // if (arr.length == 2) {
    //   arr = []
    //   setCardFlipped(["universalNo", false])
    // }
    // setSelectedCards(arr.length)
    // console.warn(selectedCards)
    arr.push(key)
    if (cardKey == selectedCard) {
      setCardFlipped(cardKey)
      console.log("Winner")
    }
    else if (arr.length == 2) {
      arr = []
      setCardFlipped(["universalNo", false])
    }
    selectedCard = cardKey
    selectedKey = key 
  }


  return (
    <div className='cardHolder'>
        {cards ? cards.map((card, key) => <Card cardFlipped={cardFlipped} cardClicked={cardClicked} contents={card} number={key} cardNumber={selectedCards}/>) : null}
    </div>
  )
}

export default Game
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getCookie, getPlayerCookie, setPlayerCookie } from '../App'

const Game = () => {
  let cardsOnTable = []
  let usedCards = []
  const [cards, setCards] = useState<number[]>()
  const [cardFlipped, setCardFlipped] = useState<number[]>()
  var selectedCard:number
  var selectedKey:number
  const [selectedCards, setSelectedCards] = useState(0)
  const [cardFlippedNo, setCardFlippedNo] = useState([])
  let useCardsAmount = 10;
  useEffect(() => {
    let count = 0
    useCardsAmount = parseInt(getCookie("amountOfCards")) + 2
    for (let i = 0; i < 5; i++) {
      let randIndex = 0
      let randIndexTwo = 0
      do {
        randIndex = Math.floor(Math.random() * (useCardsAmount - 1) ) + 1
      }  while (usedCards.includes(randIndex))
      do {
        randIndexTwo = Math.floor(Math.random() * (useCardsAmount - 1) ) + 1
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
  const [currentScore, setCurrentScore] = useState(0)
  const cardClicked = (cardKey:number, key:number) => {
    arr.push(key)
    console.log(arr.length)
    if (cardKey == selectedCard) {
      setCardFlipped([cardKey, "delete"])
      setCurrentScore(currentScore + 2)
      if (Number(getCookie("highscore")) < currentScore) {
        setPlayerCookie(getCookie("currentPlayer"), Number(getCookie("amountOfCards")), currentScore)
      }
    }
    else if (arr.length == 2) {
      arr = []
      setCardFlipped(["universalNo", false])
      setTimeout(() => {
        setCardFlipped([])
      }, 150)
    }
    selectedCard = cardKey
    selectedKey = key 
  }
  

  return (
    <div className='gameHolder'>
      <div className='cardHolder'>
        {cards ? cards.map((card, key) => <Card cardFlipped={cardFlipped} cardClicked={cardClicked} contents={card} number={key} cardNumber={selectedCards}/>) : null}
      </div>
    </div>
  )
}

export default Game
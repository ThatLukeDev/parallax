import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';
import { HtmlModel } from './HtmlRotating';

const Game = ({gameOver}) => {
  const distinctCards = 12;
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
    genCards()
    setCookie("allowFlipCards", "1");
  }, [])
  
  
  const genCards = () => {
    setCards([])
    document.querySelectorAll(".cardOuter").forEach((doc) => {
      doc.classList.remove("hide")
    })
    let amountOfCards = parseInt(getCookie("amountOfCards")!);
    let tableCards = Array(amountOfCards).fill(-1);
    for (let i = 0; i < amountOfCards; i += 2) {
      let randCard = 0;
      do {
        randCard = Math.floor(Math.random() * distinctCards);
      } while (tableCards.includes(randCard))
      for (let j = 0; j < 2; j++) {
        let randIndex = 0;
        do {
          randIndex = Math.floor(Math.random() * amountOfCards);
        } while (tableCards[randIndex] != -1)
        tableCards[randIndex] = randCard;
      }
    }
    cardsOnTable = tableCards;
    setCards(cardsOnTable);
    selectedCard = -1;
    selectedKey = -1;
  }

  const [currentScore, setCurrentScore] = useState(0)
  var countTwo = 0
  const increment = (number:number) => {
    if (number != 0) {
      countTwo++
    }
    else {
      countTwo = 0
    }
  }
  console.log(countTwo)
  const cardClicked = (cardKey:number, key:number) => {
    if (key != selectedKey) {
      countTwo++
      if (countTwo == 2) {
        setCookie("allowFlipCards", "0")
      }
      if (cardKey == selectedCard) {
        setCardFlipped([cardKey, "delete"])
        setCurrentScore(currentScore + 1)
        countTwo = 0
        setCookie("allowFlipCards", "1")
      }
      // console.log("WHY IS THIS NOT EXCECUTING")
      else if (countTwo == 2) {
        setCardFlipped(["universalNo", false])
        
        setTimeout(() => {
          setCardFlipped([])
          setTimeout(() => {
            countTwo = 0
            setCookie("allowFlipCards", "1")
          }, 1000);
        }, 150)
        setSelectedCards(0)
      }
    }
    selectedCard = cardKey
    selectedKey = key
    // increment()
  }
  console.log(countTwo)
  useEffect(() => {
    setSelectedCards(countTwo)
  }, [countTwo])
  console.log(cardFlipped)
  useEffect(() => {
    if (Number(getCookie("highscore")) < currentScore) {
      setPlayerCookie(getCookie("currentPlayer"), Number(getCookie("amountOfCards")), currentScore)
    }
    if (currentScore >= Number(getCookie("amountOfCards")) / 2) {
      setTimeout(() => {
        gameOver(true)
      }, 400);
    }
  }, [currentScore])
  

  return (
    <div className='gameHolder'>
        {/* <audio id="winSound">
          <source src="src/confetti.mp3" type="audio/mpeg" />
        </audio> */}
      <div className='cardHolder'>
        {cards ? cards.map((card, key) => <Card cardFlipped={cardFlipped} cardClicked={cardClicked} contents={card} number={key} cardNumber={selectedCards}/>) : null}
      </div>
      {/* <button onClick={() => {genCards()}}>Reset</button> */}
      {/*<canvas>
        <HtmlModel />
      </canvas>*/}
    </div>
  )
}

export default Game
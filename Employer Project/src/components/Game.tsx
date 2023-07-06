import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';
import CardModelContainer from './CardModelContainer';

const Game = ({gameOver}) => {
  let timekeeper = 0;
  const [timer, setTimer] = useState<number>(0);
  const [turns, setTurns] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const distinctCards = 12;
  let cardsOnTable = [];
  let usedCards = [];
  const [cards, setCards] = useState<number[]>();
  const [cardFlipped, setCardFlipped] = useState<number[]>();
  var selectedCard:number;
  var selectedKey:number;
  const [selectedCards, setSelectedCards] = useState(0);
  const [cardFlippedNo, setCardFlippedNo] = useState([]);
  let useCardsAmount = 10;
  useEffect(() => {
    genCards();
    setCookie("allowFlipCards", "1");
    setInterval(() => {
      timekeeper += 1;
      setCookie("timer", timekeeper.toString());
      setPlayerCookie(getCookie("currentPlayer")!, Number(getCookie("amountOfCards")), Number(getCookie("highscore")), Number(getCookie("turns")), timekeeper);
      console.log(currentScore);
    }, 1000);
  }, [])
  
  const genCards = () => {
    setCards([]);
    document.querySelectorAll(".cardOuter").forEach((doc) => {
      doc.classList.remove("hide");
    });
    let amountOfCards = parseInt(getCookie("amountOfCards")!);
    let tableCards = Array(amountOfCards).fill(-1);
    for (let i = 0; i < amountOfCards; i += 2) {
      let randCard = 0;
      do {
        randCard = Math.floor(Math.random() * distinctCards);
      } while (tableCards.includes(randCard));
      for (let j = 0; j < 2; j++) {
        let randIndex = 0;
        do {
          randIndex = Math.floor(Math.random() * amountOfCards);
        } while (tableCards[randIndex] != -1);
        tableCards[randIndex] = randCard;
      }
    }
    cardsOnTable = tableCards;
    setCards(cardsOnTable);
    selectedCard = -1;
    selectedKey = -1;
  }

  var countTwo = 0;
  const increment = (number:number) => {
    if (number != 0) {
      countTwo++;
    }
    else {
      countTwo = 0;
    }
  }
  const cardClicked = (cardKey:number, key:number) => {
    if (key != selectedKey) {
      countTwo++;
      if (countTwo == 2) {
        setCookie("allowFlipCards", "0");
        setTurns(turns + 1);
        setCookie("turns", (Number(getCookie("turns"))+1).toString());
      }
      if (cardKey == selectedCard) {
        setCardFlipped([cardKey, "delete"]);
        setCurrentScore(currentScore + 1)
        setCookie("highscore", (Number(getCookie("highscore"))+1).toString());
        countTwo = 0;
        setCookie("allowFlipCards", "1");
      }
      // console.log("WHY IS THIS NOT EXCECUTING")
      else if (countTwo == 2) {
        setCardFlipped(["universalNo", false]);
        
        setTimeout(() => {
          setCardFlipped([]);
          setTimeout(() => {
            countTwo = 0;
            setCookie("allowFlipCards", "1");
          }, 1000);
        }, 150);
        setSelectedCards(0);
      }
    }
    selectedCard = cardKey;
    selectedKey = key;
    // increment();
  }
  useEffect(() => {
    setSelectedCards(countTwo);
  }, [countTwo]);
  useEffect(() => {
    if (Number(getCookie("highscore")) < currentScore) {
      setPlayerCookie(getCookie("currentPlayer")!, Number(getCookie("amountOfCards")), currentScore, turns, Number(getCookie("timer")));
    }
    if (currentScore >= Number(getCookie("amountOfCards")) / 2) {
      setTimeout(() => {
        gameOver(true);
      }, 400);
    }
  }, [currentScore]);
  let easterEgg = false
  // useEffect(() => {
  easterEgg = getCookie("dimension") == "4D"
  //   if (easterEgg) {
  //     document.getElementsByClassName("easterImage")?.src = `/${Math.floor(Math.random() * 3)}.png`
  //   }
  // }, [])
  return (
    <div>
      <div className="resetBtnFlex"><button className="resetBtn removeBorder primaryColour smallText squareBtn3 buttonClick" onClick={() => { location.reload() }}>Home</button></div>
      <div className='gameHolder'>
        <div className='cardHolder'>
          {cards && !easterEgg ? cards.map((card, key) => <Card cardFlipped={cardFlipped} cardClicked={cardClicked} contents={card} number={key} cardNumber={selectedCards}/>) : null}
          {easterEgg ? <div className='formContainer text-white absoluteCard'>
            <p>To verify you are able to go to the fourth dimension, please Enter the word below</p>
            <img src={`/${Math.floor(Math.random() * 15)}.png`} className='easterImage' />
            <input className='text-white'></input>
          </div> : null}
        </div>
      </div>
    </div>
  )
}

export default Game

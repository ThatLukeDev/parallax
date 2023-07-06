import React, { useEffect, useState } from 'react';
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';
import CardModelContainer from './CardModelContainer'


const Card = ({cardFlipped, contents, cardClicked, number, cardNumber}) => {
  const [shown, setShown] = useState(false);
  let easterEgg = getCookie("dimension") == "4D"
  let twod = getCookie("dimension") == "2D"

  // console.log(cardNumber);

  number = `idof${number}`;
  if (shown) {
    document.querySelector(`.${number}`)?.classList.add("flipCard");
  }

  if (cardFlipped != undefined && shown && cardFlipped[0] == "universalNo") {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.add("flipBack");
      document.querySelector(`.${number}`)?.classList.remove("flipCard");
      setTimeout(() => {
        setShown(false);
        document.querySelector(`.${number}`)?.classList.remove("flipBack");
      }, 200);
    }, 1000);
  }
  // console.log(cardFlipped)
  if (cardFlipped != undefined && shown && cardFlipped[0] == contents && cardFlipped[1] == "delete") {
    setTimeout(() => {
      setShown(false)
      document.querySelector(`.${number}`)?.classList.add("hide");
    }, 1000);
  }
  const dict = {
    0: "BODYMODEL",
    1: "BUTTONMODEL",
    2: "CANVASMODEL",
    3: "DIVMODEL",
    4: "HEADERMODEL",
    5: "HEADMODEL",
    6: "HTMLMODEL",
    7: "IMGMODEL",
    8: "INPUTMODEL",
    9: "PMODEL",
    10: "SCRIPTMODEL",
    11: "STYLEMODEL",
  };
  const dict2D = {
    0: "<body>",
    1: "<button>",
    2: "<canvas>",
    3: "<div>",
    4: "<header>",
    5: "<head>",
    6: "<html>",
    7: "<img>",
    8: "<input>",
    9: "<p>",
    10: "<script>",
    11: "<style>",
  };
  return (
    <div className={`cardOuter ${number} cardText`} onClick={() => {
      if (getCookie("allowFlipCards") == "1") {
        setShown(true);
        cardClicked(contents, number)
      }
    }}>
      {!easterEgg && !twod && shown ? <CardModelContainer cardToDisplay={dict[contents]} /> : <div></div>}
      {!easterEgg && twod && shown ? <p className='textInCard'>{dict2D[contents]}</p> : <div></div>}
      {easterEgg && shown ? <p className='textInCard'>easter egg here</p> : <div></div>}
      {shown ? <div></div> : <div className='blueFillCard'></div>}
    </div>
  )
}

export default Card
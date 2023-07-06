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
    0: "<BODY>",
    1: "<BUTTON>",
    2: "<CANVAS>",
    3: "<DIV>",
    4: "<HEADER>",
    5: "<HEAD>",
    6: "<HTML>",
    7: "<IMG>",
    8: "<INPUT>",
    9: "<P>",
    10: "<SCRIPT>",
    11: "<STYLE>",
  };
  return (
    <div className={`cardOuter ${number} cardText`} onClick={() => {
      if (getCookie("allowFlipCards") == "1") {
        setShown(true);
        cardClicked(contents, number)
      }
    }}>
      {!twod && shown ? <CardModelContainer cardToDisplay={dict[contents]} /> : <div></div>}
      {twod && shown ? <p className='textInCard'>{dict2D[contents]}</p> : <div></div>}
    </div>
  )
}

export default Card
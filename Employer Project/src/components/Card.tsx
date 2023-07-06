import React, { useEffect, useState } from 'react';
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';
import CardModelContainer from './CardModelContainer'


const Card = ({cardFlipped, contents, cardClicked, number, cardNumber}) => {
  const [shown, setShown] = useState(false);

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
  return (
    <div className={`cardOuter ${number} cardText`} onClick={() => {
      if (getCookie("allowFlipCards") == "1") {
        setShown(true);
        cardClicked(contents, number)
      }
    }}>
      {shown ? <CardModelContainer cardToDisplay={dict[contents]} /> : <div></div>}
    </div>
  )
}

export default Card
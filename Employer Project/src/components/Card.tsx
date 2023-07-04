import React, { useEffect, useState } from 'react'

const Card = ({cardFlipped, contents, cardClicked, number, cardNumber}) => {
  const [shown, setShown] = useState(false)
  number = `idof${number}`
  if (shown) {
    document.querySelector(`.${number}`)?.classList.add("flipCard")
  }

  if (cardFlipped != undefined && shown && cardFlipped[0] == "universalNo") {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.add("flipBack");
      document.querySelector(`.${number}`)?.classList.remove("flipCard");
      setTimeout(() => {
        setShown(false)
        document.querySelector(`.${number}`)?.classList.remove("flipBack")
      }, 200)
    }, 1000)
  }
  if (cardFlipped != undefined && shown && cardFlipped[0] == contents && cardFlipped[1] == "delete") {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.add("hide")
    }, 1000)
  }
  const dict = {
    0: "<>",
    1: "<p>",
    2: "<h1>",
    3: "<div>",
    4: "<input>",
    5: "<form>",
    6: "<script>",
    7: "<style>",
    8: "<span>",
    9: "<dfm>"
  }
  console.log(cardNumber)
  return (
    <div className={`cardOuter ${number} cardText`} onClick={() => {
      if (cardNumber < 2) {
        setShown(true);
      }
      cardClicked(contents, number)
    }}>
      {shown ? <p className='textInCard'>{dict[contents]}</p> : <div></div>}
    </div>
  )
}

export default Card
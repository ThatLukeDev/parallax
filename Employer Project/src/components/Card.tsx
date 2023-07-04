import React, { useEffect, useState } from 'react'

const Card = ({cardFlipped, contents, cardClicked, number, cardNumber}) => {
  const [shown, setShown] = useState(false)
  number = `idof${number}`
  if (shown && cardNumber < 2) {
    document.querySelector(`.${number}`)?.classList.add("flipCard")
  }
  if (cardFlipped != undefined && cardFlipped[0] == contents && cardFlipped[1] == false && shown) {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.remove("flipCard")
      setShown(false)
    }, 1000)
  }
  console.log(cardFlipped) 
  if (cardFlipped != undefined && shown && cardFlipped[0] == "universalNo") {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.remove("flipCard")
      setShown(false)
    }, 1000)
  }
  if (cardFlipped != undefined && shown && cardFlipped[0] == contents && cardFlipped[1] == "delete") {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.add("hide")
    }, 1000)
  }
  var dict = {
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
  return (
    <div className={`cardOuter ${number} cardText`} onClick={() => {
      if (cardNumber < 2) {
        setShown(true); 
      }
      cardClicked(contents, number); console.log("hello world")}}>
      {shown ? dict[contents] : <div></div>}
    </div>
  )
}

export default Card
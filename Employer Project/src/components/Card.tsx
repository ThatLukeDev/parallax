import React, { useEffect, useState } from 'react'

const Card = ({cardFlipped, contents, cardClicked, number}) => {
  const [shown, setShown] = useState(false)
  number = `idof${number}`
  if (shown) {
    document.querySelector(`.${number}`)?.classList.add("flipCard")
  }
  console.log(cardFlipped)
  if (cardFlipped != undefined && cardFlipped[0] == contents && cardFlipped[1] == false && shown) {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.remove("flipCard")
      setShown(false)
    }, 1000)
  }
  else if (cardFlipped != undefined && shown && cardFlipped[0] == "universalNo") {
    setTimeout(() => {
      document.querySelector(`.${number}`)?.classList.remove("flipCard")
      setShown(false)
    }, 1000)
  }
  var dict = {
    0: "<>",
    1: "<p>",
    2: "<h1>",
    3: "<div>",
    4: "<input>",
    5: "<form>",
  }
  return (
    <div className={`cardOuter ${number} cardText`} onClick={() => {setShown(true); cardClicked(contents, number); console.log("hello world")}}>
      {shown ? dict[contents] : <div></div>}
    </div>
  )
}

export default Card
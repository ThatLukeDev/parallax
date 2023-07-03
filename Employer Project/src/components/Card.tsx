import React, { useEffect, useState } from 'react'

const Card = ({contents, cardClicked, number}) => {
  const [shown, setShown] = useState(false)
  if (shown) {
    document.querySelector(`.${number.toString()}`)?.classList.add("flipCard")
    setTimeout(() => {
      setShown(false)
      document.querySelector(`.${number.toString()}`)?.classList.remove("flipCard")
    }, 1000);
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
    <div className={`cardOuter ${number.toString()}`} onClick={() => {setShown(true); cardClicked(contents); console.log("hello world")}}>
      {shown ? dict[contents] : <div></div>}
    </div>
  )
}

export default Card
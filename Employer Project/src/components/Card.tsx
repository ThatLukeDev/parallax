import React, { useEffect, useState } from 'react'

const Card = ({contents}) => {
  const [shown, setShown] = useState(false)
  if (shown) {
    document.querySelector(".cardOuter")?.classList.add("flipCard")
    setTimeout(() => {
      setShown(false)
      document.querySelector(".cardOuter")?.classList.remove("flipCard")
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
    <div className='cardOuter' onClick={() => setShown(true)}>
      {shown ? dict[contents] : <div></div>}
    </div>
  )
}

export default Card
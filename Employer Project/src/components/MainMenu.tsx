import { useEffect } from 'react'

const MainMenu = () => {
  let getCookie = (name : string) => {
    return document.cookie.split(name + "=")[1].split(";")[0]
  }
  let setCookie = (name : string, content : string) => {
    document.cookie = name + "=" + content;
  }
  let play = () => {
    setCookie("currentPlayer", document.getElementById("playernameBox")!.value)
    setCookie("highscore", "0")
  }
  let chooseAmount = (amount : number) => {
    setCookie("amountOfCards", amount.toString())
    document.getElementById("cardSelections")?.childNodes.forEach((x) => {
      if (x.innerText == amount.toString()) {
        x.classList.remove("primaryButtonColour")
      }
      else {
        x.classList.add("primaryButtonColour")
      }
    })
  }
  useEffect(() => {
    chooseAmount(4)
  }, [])
  
  return (
    <div className='mainOuter'>
      <h1 className='titleFont largeText primaryColour'>CARD FLIPPER</h1>
      <div>
        <input type="text" className='secondaryColour mediumText' id="playernameBox" placeholder='Username...' />
        <button className='removeBorder secondaryColour mediumText' onClick={() => play()}>PLAY</button>
      </div>
      <div id="cardSelections">
        <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => chooseAmount(4)}>4</button>
        <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => chooseAmount(8)}>8</button>
        <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => chooseAmount(12)}>12</button>
        <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => chooseAmount(16)}>16</button>
        <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => chooseAmount(20)}>20</button>
      </div>
    </div>
  )
}

export default MainMenu
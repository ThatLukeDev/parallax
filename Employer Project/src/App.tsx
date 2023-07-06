import { useState, useRef, useEffect } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'

export let getCookie = (name : string) => {
  let retval = null
  try {
    retval = document.cookie.split(name + "=")[1].split("; ")[0]
  } catch {
    retval = null;
  }
  return retval;
}
export let setCookie = (name : string, content : string) => {
  document.cookie = name + "=" + content;
}
export let setPlayerCookie = (username : string, difficulty : number, highscore : number, turns : number, timer : number) => {
  setCookie("PLAYER_" + username.replace(/(, )|<.+?>/g,""), `${username}, ${difficulty.toString()}, ${highscore.toString()}, ${turns.toString()}, ${timer.toString()}`);
}
export let getPlayerCookie = (username : string) => {
  let cook = getCookie("PLAYER_" + username.replace(/(, )|<.+?>/g,""))!.split(", ");
  return cook;
}
export let updateCurrentPlayerCookie = () => {
  setPlayerCookie(getCookie("currentPlayer")!, Number(getCookie("amountOfCards")), Number(getCookie("highscore")), Number(getCookie("turns")), Number(getCookie("timer")))
}
function App() {
  const contextRef= useRef(null)
  useEffect(() => {
    const canvas = contextRef.current!
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d')
    if (!context) {
      return;
    }
    canvas.width = window.outerWidth
    canvas.height = window.outerHeight

    let numbers = "0101000001101100011001010110000101110011011001010010000001100111011010010111011001100101001000000110110101100101001000000110000100100000011010100110111101100010001000000110000101110100001000000101000001100001011100100110000101101100011011000110000101111000"

    const fontSize = 16
    const columns = canvas.width/fontSize
    const rainDrops = []
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1
    }
    const draw = () => {
      context.fillStyle = "rgba(11, 25, 24, 0.08)"
      context.fillRect(0, 0, canvas.width, canvas.height)


      context.fillStyle = "#fff"
      context.font = fontSize + 'px monospace'
      for (let i = 0; i < rainDrops.length; i++) {
        const text = numbers.charAt(Math.floor(Math.random() * numbers.length))
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize)
  
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }
    setInterval(draw, 30)
  }, [])

  const [menuEnabled, setMenuEnabled] = useState(true)
  return (
    <div className='mainAppContainer'>
      <div className='overlap'>
        { menuEnabled && < MainMenu setState={setMenuEnabled} /> }
        { !menuEnabled && < Game gameOver={setMenuEnabled} /> }
      </div>
      <div className='canvasContainerOverlap'>
        <canvas id='Matrix' ref={contextRef}></canvas>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [menuEnabled, setMenuEnabled] = useState(true)
  return (
    <div>
      <div className='overlap'>
        { menuEnabled && < MainMenu setState={setMenuEnabled} /> }
        { !menuEnabled && < Game gameOver={setMenuEnabled} /> }
      </div>
    </div>
  )
}

export default App

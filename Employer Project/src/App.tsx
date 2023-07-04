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
export let setPlayerCookie = (username : string, difficulty : number, highscore : number) => {
  setCookie("PLAYER_" + username.replace(/(, )|<.+?>/g,""), `${username}, ${difficulty.toString()}, ${highscore.toString()}`);
}
export let getPlayerCookie = (username : string) => {
  let cook = getCookie("PLAYER_" + username.replace(/(, )|<.+?>/g,"")).split(", ");
  return [cook[0], cook[1], cook[2]];
}
export let updateCurrentPlayerCookie = () => {
  setPlayerCookie(getCookie("currentPlayer"), Number(getCookie("amountOfCards")), Number(getCookie("highscore")))
}
function App() {
  const [menuEnabled, setMenuEnabled] = useState(true)
  return (
    <div>
      { menuEnabled && < MainMenu setState={setMenuEnabled} /> }
      { !menuEnabled && < Game /> }
    </div>
  )
}

export default App

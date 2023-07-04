import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'

export let getCookie = (name : string) => {
  return document.cookie.split(name + "=")[1].split(";")[0];
}
export let setCookie = (name : string, content : string) => {
  document.cookie = name + "=" + content;
}
export let setPlayerCookie = (username : string, difficulty : number, highscore : number) => {
  setCookie(username, `${username}, ${difficulty.toString()}, ${highscore.toString()}`);
}
export let getPlayerCookie = (username : string) => {
  let cook = getCookie(username).split(", ");
  return [cook[0], cook[1], cook[2]];
}
export let updateCurrentPlayerCookie = () => {
  setPlayerCookie(getCookie("currentPlayer"), Number(getCookie("amountOfCards")), getCookie("highscore"))
}
function App() {
  return (
    <div>
      <MainMenu />
    </div>
  )
}

export default App

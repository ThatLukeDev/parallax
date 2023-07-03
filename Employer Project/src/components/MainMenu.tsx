import React from 'react'

const MainMenu = () => {
  let getCookie = (name : string) => {
    return document.cookie.split(name + "=")[1].split(";")[0]
  }
  let setCookie = (name : string, content : string) => {
    document.cookie = name + "=" + content;
  }
  let play = () => {
    setCookie("currentPlayer", document.getElementById("playernameBox")!.value)
  }
  return (
    <div className='mainOuter'>
      <h1 className='titleFont largeText primaryColour'>CARD FLIPPER</h1>
      <div>
        <input type="text" className='secondaryColour mediumText' id="playernameBox" placeholder='username...' />
        <button className='removeBorder secondaryColour mediumText' onClick={() => play()}>PLAY</button>
      </div>
    </div>
  )
}

export default MainMenu
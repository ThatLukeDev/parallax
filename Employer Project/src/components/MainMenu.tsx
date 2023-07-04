import React, { useEffect, useState } from 'react';
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';
import ScoreComponent from './ScoreComponent';

const MainMenu = ({setState}) => {
const [scoreBoardEntries, setScoreBoardEntries] = useState([])
  const enterToScoreboard = (username : string, amountOfCards : number, highscore : number) => {
    
  }
  let clearScoreboard = () => {
    document.getElementById("scoreboardBody")!.innerHTML = "<tr><th>___</th><th>USERNAME</th><th>CARDS</th><th>SCORE</th></tr>";
  }
  let play = () => {
    setCookie("currentPlayer", document.getElementById("playernameBox")!.value.replace(/(, )|<.+?>/g,"").substring(0,10));
    setCookie("highscore", "0");
    if (getCookie("PLAYER_" + getCookie("currentPlayer")) != null) {
      setCookie("highscore", getPlayerCookie(getCookie("currentPlayer")!)[2])
    }
    setPlayerCookie(getCookie("currentPlayer")!, Number(getCookie("amountOfCards")), Number(getCookie("highscore")));
    setState(false);
  }
  let chooseAmount = (amount : number) => {
    setCookie("amountOfCards", amount.toString());
    document.getElementById("cardSelections")?.childNodes.forEach((x) => {
      if (x.innerText == amount.toString()) {
        x.classList.remove("primaryButtonColour");
      }
      else {
        x.classList.add("primaryButtonColour");
      }
    })
  }
  const toggleButtons = (cardNo:number) => {
    // document.cookie = cardNo;
    document.querySelectorAll(".squareBtn").forEach((button) => {
      button.classList.remove("selected")
    })
    document.getElementById(`${cardNo}-card`)?.classList.add("selected")
    console.log(cardNo)
  }
  useEffect(() => {
    toggleButtons(16)
    // clearScoreboard();
    // document.cookie.split("; ").forEach((currentCookie) => {
    //   let name = currentCookie.split("=")[0];
    //   let content = currentCookie.split("=")[1].split(", ");
    //   if (name.substring(0,7) == "PLAYER_") {
    //     enterToScoreboard(content[0], Number(content[1]), Number(content[2]))
    //   }
    // })
  }, [])
  const buttonsArray = [8, 16, 24]

  return (
    <div className='reset'>
      <div className='mainOuter'>
        <h1 className='titleFont largeText primaryColour'>BYTE FLIPPER</h1>
        <div className='formContainer'>
          <input type="text" className='secondaryColour mediumText' id="playernameBox" placeholder='Username...' />
          <button className='removeBorder secondaryColour mediumText buttonClass' onClick={() => play()}>PLAY</button>
          <div id="cardSelections">
            <h1 className='cardHeader'>Select Card Number</h1>
            {buttonsArray.map((current) => 
              <button className='removeBorder secondaryColour smallText squareBtn buttonClick' onClick={() => {toggleButtons(current)}} id={`${current}-card`}>{current}</button>
            )}
          </div>
          <div className='primaryColour scoreBoardContainer'  id='scoreboard'>
            <h1 className='noMargin'>The Scores</h1>
            <div className='scoreRow'>
              <h1>Username</h1>
              <h1 className='rightElementTwo'>Cards</h1>
              <h1 className='rightElement'>Score</h1>
            </div>
            <ScoreComponent username={"hello0"} cards={"there"} score={12} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
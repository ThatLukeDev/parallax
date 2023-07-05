import React, { useEffect, useState } from 'react';
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';
import ScoreComponent from './ScoreComponent';

const MainMenu = ({setState}) => {
const [scoreBoardEntries, setScoreBoardEntries] = useState([])
  // const enterToScoreboard = (username : string, amountOfCards : number, highscore : number) => {
    
  // }
  const invertArray = (array) => {
    let temp
    for (let i = 0; i < Math.ceil(array.length / 2); i++) {
      temp = array[i]
      array[i] = array[array.length - (i+1)]
      array[array.length - (i+1)] = temp
    }
    return array;
  }
  const clearScoreboard = () => {
    document.getElementById("scoreboardBody")!.innerHTML = "<tr><th>___</th><th>USERNAME</th><th>CARDS</th><th>SCORE</th></tr>";
  }
  const play = () => {
    setCookie("currentPlayer", document.getElementById("playernameBox")!.value.replace(/(, )|<.+?>/g,"").substring(0,10));
    setCookie("highscore", "0");
    setCookie("turns", "0");
    setCookie("timer", "0");
    if (getCookie("PLAYER_" + getCookie("currentPlayer")) != null) {
      setCookie("highscore", getPlayerCookie(getCookie("currentPlayer")!)[2])
      setCookie("turns", getPlayerCookie(getCookie("currentPlayer")!)[3])
      setCookie("timer", getPlayerCookie(getCookie("currentPlayer")!)[4])
    }
    setPlayerCookie(getCookie("currentPlayer")!, Number(getCookie("amountOfCards")), Number(getCookie("highscore")), Number(getCookie("turns")), Number(getCookie("timer")));
    setState(false);
  }
  // let chooseAmount = (amount : number) => {
  // }
  const toggleButtons = (cardNo:number) => {
    setCookie("amountOfCards", cardNo.toString());
    // document.cookie = cardNo;
    document.querySelectorAll(".squareBtn").forEach((button) => {
      button.classList.remove("selected")
    })
    document.getElementById(`card${cardNo}`)?.classList.add("selected")
    console.log(cardNo)
  }
  const [scoreBoard, setScoreBoard] = useState()
  useEffect(() => {
    toggleButtons(16)
    // clearScoreboard();
    let count = 0;
    let scoreArray = []
    document.cookie.split("; ").forEach((currentCookie) => {
      let name = currentCookie.split("=")[0];
      let content = currentCookie.split("=")[1].split(", ");
      if (name.substring(0,7) == "PLAYER_") {
        scoreArray[count] = {userName: name.substring(7, name.length), cardNumber: `${Number(content[4]) / 2}s-${content[3]}`, score: `${content[2]}/${Number(content[1]) / 2}`}
        count++
      }
    })
    scoreArray = scoreArray.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      } else if (b.score > a.score) {
        return 1;
      }
      return 0;
    })
    scoreArray = invertArray(scoreArray);
    setScoreBoard(scoreArray)
  }, [])
  const buttonsArray = [8, 16, 24]

  return (
    <div className='reset'>
      <img className="rotate" src="src/rotate.png" />
      <div className='mainOuter smallText'>
        <h1 className='titleFont largeText primaryColour'>BYTE FLIPPER</h1>
        <div className='formContainer'>
          <input type="text" className='secondaryColour mediumText' id="playernameBox" placeholder='Username...' />
          <button className='removeBorder secondaryColour mediumText buttonClass' onClick={() => play()}>PLAY</button>
          <div id="cardSelections">
            <h1 className='cardHeader'>Select Card Number</h1>
            {buttonsArray.map((current) => 
              <button className='removeBorder secondaryColour smallText squareBtn buttonClick' onClick={() => {toggleButtons(current)}} id={`card${current}`}>{current}</button>
            )}
          </div>
          <h1 className='noMargin primaryColour'>Scoreboard</h1>
          <div className='primaryColour scoreBoardContainer'  id='scoreboard'>
            <div className='scoreRow'>
              <h1></h1>
              <h1>Name</h1>
              <h1 className='rightElementTwo'>Time-Turns</h1>
              <h1 className='rightElement'>Score</h1>
            </div>
            {scoreBoard ? scoreBoard!.map((row) => <ScoreComponent username={row.userName} cards={row.cardNumber} score={row.score} />) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu

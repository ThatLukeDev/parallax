import React, { useEffect, useState } from 'react';
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';

const MainMenu = ({setState}) => {
  let enterToScoreboard = (username : string, amountOfCards : number, highscore : number) => {
    let scoreboardEntry = `<tr id="scoreboardBody_${username}"><td><button onclick='document.getElementById("scoreboardBody_${username}").outerHTML = ""; document.cookie = "PLAYER_${username}=; Max-Age=-99999999;"'><b>X</b></button></td><td>${username}</td><td>${amountOfCards.toString()}</td><td>${highscore.toString()}</td></tr>`;
    document.getElementById("scoreboardBody")!.innerHTML += scoreboardEntry;
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
        <h1 className='titleFont largeText primaryColour'>CARD FLIPPER</h1>
        <input type="text" className='secondaryColour mediumText' id="playernameBox" placeholder='Username...' />
        <button className='removeBorder secondaryColour mediumText buttonClass' onClick={() => play()}>PLAY</button>
        <div id="cardSelections">
          {buttonsArray.map((current) => 
            <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => {toggleButtons(current)}} id={`${current}-card`}>{current}</button>
          )}
        </div>
      </div>
      <div className='primaryColour' id='scoreboard'>
        <table>
          <tbody id="scoreboardBody">
            <tr>
              <th>USERNAME</th>
              <th>CARDS</th>
              <th>SCORE</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MainMenu
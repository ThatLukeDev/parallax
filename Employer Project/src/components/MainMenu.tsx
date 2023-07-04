import { useEffect } from 'react'
import { getCookie, setCookie, getPlayerCookie, setPlayerCookie, updateCurrentPlayerCookie } from '../App';

const MainMenu = () => {
  let enterToScoreboard = (username : string, amountOfCards : number, highscore : number) => {
    let scoreboardEntry = `<tr><td>${username}</td><td>${amountOfCards.toString()}</td><td>${highscore.toString()}</td></tr>`
  }
  let play = () => {
    setCookie("currentPlayer", document.getElementById("playernameBox")!.value);
    setCookie("highscore", "0");
  }
  let chooseAmount = (amount : number) => {
    setCookie("amountOfCards", amount.toString());
    document.getElementById("cardSelections")?.childNodes.forEach((x) => {;
      if (x.innerText == amount.toString()) {;
        x.classList.remove("primaryButtonColour");
      }
      else {
        x.classList.add("primaryButtonColour");
      }
    })
  }
  useEffect(() => {
    document.getElementById("cardSelections")!.innerHTML = ""
    for (let i = 4; i < 21; i += 4) {
      document.getElementById("cardSelections")!.innerHTML += `<button class='removeBorder secondaryColour smallText squareBtn' onClick="document.cookie = 'amountOfCards=${i}'; document.getElementById('cardSelections')?.childNodes.forEach((x) => { if (x.innerText == '${i}') { x.classList.remove('primaryButtonColour'); } else { x.classList.add('primaryButtonColour'); }})">${i}</button>`
    }
    chooseAmount(4);
  }, [])
  
  return (
    <div>
      <div className='mainOuter'>
        <h1 className='titleFont largeText primaryColour'>CARD FLIPPER</h1>
        <div>
          <input type="text" className='secondaryColour mediumText' id="playernameBox" placeholder='Username...' />
          <button className='removeBorder secondaryColour mediumText' onClick={() => play()}>PLAY</button>
        </div>
        <div id="cardSelections">
          <button className='removeBorder secondaryColour smallText squareBtn' onClick={() => chooseAmount(1)}>4</button>
        </div>
      </div>
      <div className='primaryColour' id='scoreboard'>
        <table>
          <tr>
            <th>USERNAME</th>
            <th>CARDS</th>
            <th>SCORE</th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MainMenu
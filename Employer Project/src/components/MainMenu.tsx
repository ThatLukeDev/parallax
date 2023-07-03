import React from 'react'

const MainMenu = () => {
  return (
    <div className='mainOuter'>
      <h1 className='titleFont largeText primaryColour'>CARD FLIPPER</h1>
      <div>
        <input type="text" className='secondaryColour mediumText' placeholder='username...' />
        <button className='removeBorder secondaryColour mediumText'>PLAY</button>
      </div>
    </div>
  )
}

export default MainMenu
import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { HtmlModel } from './HtmlRotating'

const CardModelContainer = ({cardToDisplay}) => {
  console.log(cardToDisplay)
  return (
    <Canvas className=''>
      <ambientLight intensity={1} />
      {cardToDisplay ? <HtmlModel modelSelect={cardToDisplay} /> : null}
    </Canvas>
  )
}

export default CardModelContainer

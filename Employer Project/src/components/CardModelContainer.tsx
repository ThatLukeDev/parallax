import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { HtmlModel } from './HtmlRotating'

const CardModelContainer = ({cardToDisplay}) => {
  return (
    <Canvas className=''>
      <ambientLight intensity={100} />
      <spotLight intensity={300} />
      {cardToDisplay ? <HtmlModel modelSelect={cardToDisplay} /> : null}
    </Canvas>
  )
}

export default CardModelContainer

import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { HtmlModel } from './HtmlRotating'

const CardModelContainer = ({cardToDisplay}) => {

  return (
    <Canvas className=''>
      <ambientLight intensity={1} />
      {cardToDisplay == 0 ? <HtmlModel /> : null}
    </Canvas>
  )
}

export default CardModelContainer

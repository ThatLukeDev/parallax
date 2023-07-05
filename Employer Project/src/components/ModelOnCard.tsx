import { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { HtmlModel } from './HtmlRotating'

const ModelOnCard = ({modelName}) => {
  useEffect(() => {
    document.querySelector(".containerCanvas")?.append(<{modelName} />)
  }, [modelName])
  return (
    <Canvas className='containerCanvas'>
      <ambientLight intensity={1} />
    </Canvas>
  )
}

export default ModelOnCard
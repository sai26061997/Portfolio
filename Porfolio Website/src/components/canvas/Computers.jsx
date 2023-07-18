import { Suspense, useEffect, useState } from 'react'


import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import Canvasloader from "../Loader"

const Computers = ({ismobile}) => {

const computer=useGLTF("./desktop/scene.gltf")
  return (
    <mesh>
     
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={1}/>
      
      <primitive object={computer.scene}
      scale={ismobile?0.7:0.55}
      position={ismobile?[0,-3,-2.2]:[0,-2.30,-0.5]}
      rotation={[-0.01,-0.2,-0.1]}
      />
      
      
    </mesh>
  )
}

const ComputersCanvas=()=>{
  const [ismobile, setIsmobile] = useState(false);

  useEffect(()=>{
//Add a listener for changes to the screen size
    const mediaQuerry=window.matchMedia("(max-width:500px)");

    //Set the initial value of the ismobile state variable
    setIsmobile(mediaQuerry.matches);

//define a callback function to handle changes to the media querry
    const handleMediaQuerry=(event)=>{
      setIsmobile(event.matches)
    }
//add the callback function as a listener for changes to the media querry
    mediaQuerry.addEventListener("change",
    handleMediaQuerry)

    //Remove the listener when the component is unwanted
    return ()=>{
      mediaQuerry.removeEventListener("change",
      handleMediaQuerry)
    }

  },[])

  return(
  <Canvas
  frameLoop='demand'
  shadows
  camera={{position:[25,1,3],fov:15}}
  gl={{preserveDrawingBuffer:true}}
  >
    <Suspense fallback={<Canvasloader/>}>
      <OrbitControls 
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
     <Computers ismobile={ismobile} />
    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default ComputersCanvas
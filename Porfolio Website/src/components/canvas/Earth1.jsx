import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"


const Earth1 = () => {

  const earth = useGLTF("./rocket/scene.gltf")
  return (
    <mesh >
     
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={1}/>
    <primitive
    object={earth.scene}
    scale={0.017}
    position={[0,-2.30,-0.2]}
    //position-y={0}
    //rotation-y={0}
    />
    </mesh>
  )
}


const EarthCanvas1=()=>{

  return(
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    camera={{fov:45,
    //near:0.1,
    //far:20,
    position:[0,4,7]
    }}
    >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
          
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          />
          <Earth1/>

        </Suspense>

    </Canvas>
  )
}

export default EarthCanvas1
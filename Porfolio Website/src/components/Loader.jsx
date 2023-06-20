import {Html,useProgress} from "@react-three/drei"

const Loader = () => {
  const {progress1}=useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
      style={{
        fontSize:16,
        color:"#f1f1f1",
        fontWeight:800,
        marginTop:40
      }}>{progress1}Wait For london...</p>
    </Html>
  )
}

export default Loader
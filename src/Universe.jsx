import { Canvas} from "@react-three/fiber";
import Sun from "./Sun";
import { Stats, OrbitControls, Text} from "@react-three/drei";

export default function Universe(){
    return(
        <div style={{width: "100vw", height: "100vh", background:"Black"}}>
            <Canvas style = {{background: "black"}} camera={{position: [30,20,10], fov: 45, near: 0.1, far:1000}}>
                <ambientLight position = {[0,0,0]} intensity= {0.8}/>
                <pointLight position = {[0,0,0]} intensity= {200}/>
                <Sun size = {[0.5,2,2]} color = "yellow" coordinates = {[0,0,0]}/>
                <OrbitControls/>
            </Canvas>
        </div>
    )
}

//            <div style = {{width: "400px", border: "1px", borderStyle: "solid"}}>Click a planet to zoom in on planet. Click the planet again to use orbital controls again.</div>


//                <Text position = {[0,20,0]}scale = {[10,10,10]} color="white" anchorX = "center" anchorY = "middle">
//Solar System
//</Text>
import { Canvas} from "@react-three/fiber";
import Sun from "./Sun";
import {OrbitControls} from "@react-three/drei";

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

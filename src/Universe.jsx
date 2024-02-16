import { Canvas} from "@react-three/fiber";
import Sun from "./Sun";
import {OrbitControls} from "@react-three/drei";
import Loader from './Loader';
import {Suspense} from 'react';

export default function Universe(){
    return(
        <div style={{width: "100vw", height: "100vh", background:"Black"}}>
            <Canvas style = {{background: "black"}} camera={{position: [30,20,10], fov: 45, near: 0.1, far:1000}}>
                <Suspense fallback={<Loader/>}>
                    <Sun size = {[0.5,2,2]} color = "yellow" coordinates = {[0,0,0]}/>  
                </Suspense>
                <ambientLight position = {[0,0,0]} intensity= {0.8}/>
                <pointLight position = {[0,0,0]} intensity= {200}/>
                <OrbitControls/>
                
            </Canvas>
        </div>
    )
}

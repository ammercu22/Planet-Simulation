import {useState, useRef} from "react";
import { useFrame } from "@react-three/fiber";
import TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three';

function Planet(prop){
    const cameraRef = useRef();
    let [clicked, setClicked] = useState(false);
    const [q,w,e] = prop.coordinates
    const clockRef = useRef(new THREE.Clock())
 
    useFrame((state) =>{
        cameraRef.current.rotation.y += prop.rotation
        const angle = prop.startTime + clockRef.current.getElapsedTime() * prop.speed
        const distance = q
        const a = Math.sin(angle) * distance
        const b = Math.cos(angle) * distance
        cameraRef.current.position.set(a, 0, b)

        TWEEN.update();
        let [xScale ,yScale,zScale] = prop.coordScale
        let [x,y,z] = cameraRef.current.position;
        if(clicked){ 
            new TWEEN.Tween(state.camera.position).to({x:x + xScale, y:y + yScale, z:z+zScale},500)
                .easing(TWEEN.Easing.Cubic.Out)
                .start()
            state.camera.lookAt(x,y,z);
            state.camera.updateProjectionMatrix();
        }
    });
    return(
            <mesh>
                <mesh position={prop.coordinates} ref = {cameraRef} onClick={() => setClicked(!clicked) }>
                    <primitive  object={prop.gltf.scene} scale = {prop.scale} children-0-castShadow />
                </mesh>
            </mesh>
        )
    }
export default Planet;
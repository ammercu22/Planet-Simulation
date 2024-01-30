import {useRef} from "react";
import { useFrame } from "@react-three/fiber";

function Moon(prop){
    const meshRef = useRef();
    useFrame( () => {
        meshRef.current.rotation.y += prop.rotation;
    });
    return(
            <mesh ref = {meshRef}>
                <mesh  position={prop.coordinates} >
                    <primitive object={prop.gltf.scene} scale = {prop.scale} children-0-castShadow />
                </mesh>
            </mesh>
    )
}
export default Moon;
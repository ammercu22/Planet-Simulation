import { useLoader} from "@react-three/fiber";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';
import Planet from './Planet.jsx';

const au = 149.6 * 10**6 * 1000;
const scale = 7/au;
function Sun(prop){
  
    const sunGltf = useLoader(GLTFLoader, '/solar_system/sun/scene.gltf');
    const mercuryGltf = useLoader(GLTFLoader, '/solar_system/mercury/scene.gltf');
    const venusGltf = useLoader(GLTFLoader, '/solar_system/new_venus__4/scene.gltf');
    const earthGltf = useLoader(GLTFLoader, '/solar_system/earth/scene.gltf');
    const marsGltf = useLoader(GLTFLoader, '/solar_system/mars/scene.gltf');
    const jupiterGltf = useLoader(GLTFLoader, '/solar_system/jupiter/scene.gltf');
    const saturnGltf = useLoader(GLTFLoader, '/solar_system/saturn/scene.gltf');
    const uranusGltf = useLoader(GLTFLoader, '/solar_system/uranus_new_1/scene.gltf');
    const neptuneGltf = useLoader(GLTFLoader, '/solar_system/neptune/scene.gltf');

    return(
        <mesh position={prop.coordinates} castShadow>
            <primitive scale = {0.1} object={sunGltf.scene} />
            <Planet speed = {0.048} startTime = {1} coordScale = {[0,0,0.5]} gltf = {mercuryGltf} scale = {0.03} name = "mercury" size = {[0.5,2,2]} coordinates ={[Math.round(0.39 * au * scale),0,0]} rotation = {0.0001083}/> 
            <Planet speed = {0.035} startTime = {25} coordScale = {[-0.1,0,1]} gltf = {venusGltf} scale = {0.02} name = "venus" size = {[0.5,2,2]} coordinates ={[Math.round(0.72 * au * scale),0,0]} rotation = {0.0000652}/>
            <Planet speed = {0.029} startTime = {30} coordScale = {[0,0,1.4]} gltf = {earthGltf} scale = {0.07} name = "earth" size = {[0.3,2,2]} coordinates ={[Math.round(-1 * au * scale),0,0]} rotation = {0.002}/>
            <Planet speed = {0.024} startTime = {45} coordScale = {[1,0,-1]} gltf = {marsGltf} scale = {0.15} name = "mars" size = {[0.1,2,2]} coordinates ={[Math.round(-1.524 * au * scale),0,0]} rotation = {0.00866}/>
            <Planet speed = {0.013}  startTime = {10} coordScale = {[4,2,14]} gltf = {jupiterGltf} scale = {0.4} name = "jupiter" size = {[0.4,2,2]} coordinates ={[Math.round(-5.2 * au * scale),0,0]} rotation = {0.0045483}/>
            <Planet speed = {0.0097} startTime = {30} coordScale = {[-2,3,11]} gltf = {saturnGltf} scale = {2.5} name = "saturn" size = {[0.4,2,2]} coordinates ={[Math.round(-8.5 * au * scale),0,0]}  rotation = {0.0036840}/>
            <Planet speed = {0.007} startTime = {60} coordScale = {[4,2.5,3]} gltf = {uranusGltf} scale = {0.01} name = "uranus" size = {[0.4,2,2]} coordinates ={[Math.round(-9.8 * au * scale),0,0]} rotation = {0.0014794}/>
            <Planet speed = {0.005} startTime = {2.5} coordScale = {[3.5,0.2,0]} gltf = {neptuneGltf} scale = {0.1} name = "Neptune" size = {[0.4,2,2]} coordinates ={[Math.round(-12 * au * scale),0,0]} rotation = {0.007718}/>
        </mesh>
        
    );
}
export default Sun;

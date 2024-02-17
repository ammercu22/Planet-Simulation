import {Html, useProgress} from '@react-three/drei'

export default function Loader(){
    const {progress , item} = useProgress()
   
    return <Html center> Loading... </Html>
}
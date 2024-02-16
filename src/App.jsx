import Universe from "./Universe";
import {useState} from 'react';
import './assets/style.css'
function App() {
    const [componentState, setComponentState] = useState(false)

    function frontPage(){
      return(
        <div>
          <h1>3D Planet Simulation</h1>
          <div className="instructions">
            <p>Click a planet to zoom in on planet. Click the planet again to use orbital controls again. Planets will take a couple of seconds to load.</p>
            <button  className="button" role="button" onClick={()=>{setComponentState(true)}}>Ok</button>
          </div>
          <div className="credits">
            <p>Credits: </p>
            <p>This work is based on <a href= "https://sketchfab.com/3d-models/earth-4de1bcbd22a444abb4f089b9b78ec96a">"Earth"</a>, <a href="https://sketchfab.com/3d-models/jupiter-e00d35ab713a44dfb0a7450a79a6dd80">"Jupiter"</a>, <a href="https://sketchfab.com/3d-models/mercury-planet-ccb6c6a9ac3742109cc67c0f16032b49">"Mercury (planet)"</a>, <a href="https://sketchfab.com/3d-models/neptune-fe05e06a265d4a8f9285d34c933878ee">"Neptune"</a>, <a href="https://sketchfab.com/3d-models/saturn-planet-9ab1eb3bb97f4e4a9305c0aae2d280a6">"Saturn (planet)"</a>, and <a href="https://sketchfab.com/3d-models/sun-9ef1c68fbb944147bcfcc891d3912645">"Sun"</a> by <a href="https://sketchfab.com/SebastianSosnowski">SebastianSosnowski</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0 </a></p>
            <p>This work is also based on <a href="https://sketchfab.com/3d-models/mars-0bbd08db494b4e2a873c624021248d12">"Mars"</a> by <a href="https://sketchfab.com/PatelDev">PatelDev</a>, <a href="https://sketchfab.com/3d-models/venus-realistic-8k-2aa7e3beae7841299376808bcf3306b8">"Venus  Realistic 8K"</a> by <a href="https://sketchfab.com/ShadyTex4u">Shady Tex</a>, and <a href="https://sketchfab.com/3d-models/uranus-4d2f0c3674904472ac413fdabbf491d7">"Uranus"</a> by <a href="https://sketchfab.com/shooter24994">Akshat</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a></p>
          </div>
        </div>
      )
    }

    return (
      <>
        {componentState? <Universe/>: frontPage()}
      </>
  );
}
export default App

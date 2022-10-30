import { About } from "./Components/About";
import { Carousel } from "./Components/Carousel";
import {carouseldata} from './Components/Carouseldata';
import { Gallery } from "./Components/Gallery";
import { Mission } from "./Components/Mission";
import { Vision } from "./Components/Vision";
import {galleryimages} from './Components/Gallerydata';
import { Location } from "./Components/Location";


function App() {
  return (
    <div className="bg-gray-600">
      <Carousel imagesdata={carouseldata}/>
      <About />
      <Mission />
      <Vision />
      <Gallery gallery={galleryimages} />
      <Location />
    </div>
  );
}

export default App;

import { About } from "./Components/About";
import { Carousel } from "./Components/Carousel";
import {carouseldata} from './Components/Carouseldata';
import { Gallery } from "./Components/Gallery";
import { Mission } from "./Components/Mission";
import { Vision } from "./Components/Vision";
import {galleryimages} from './Components/Gallerydata';
import { Location } from "./Components/Location";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Carousel imagesdata={carouseldata}/>
      <About />
      <Mission />
      <Vision />
      <Gallery gallery={galleryimages} />
      <Location />
      <Footer />
    </div>
  );
}

export default App;

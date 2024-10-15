import ImageTextComponent from '../components/Home/ImageTextComponent';
import CarouselComponent from '../components/Home/CarouselComponent';
import PartitionComponent from '../components/Home/PartitionComponent';
import Navbar from '../components/Layouts/Navbar';

import '../App.css'

function Home() {

  return (
    <>
      <div className="container mx-auto">
            <Navbar />
            <ImageTextComponent />
            <CarouselComponent />
            <PartitionComponent />
        </div>
    </>
  )
}

export default Home

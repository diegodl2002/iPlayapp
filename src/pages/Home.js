import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Home = () => {
    return (
    <div>  
        <h1>This is Home</h1>
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="..\images\slide1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/slide2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src=".\images\slide3.jpg" width="50%" height="100" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </div> 
   
  
    );
  };
  
  export default Home;
  
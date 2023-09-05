import Carousel from 'react-bootstrap/Carousel';
import Specialpen from './../assets/Specialpen.jpg';
import Brushes1 from './../assets/brushes1.jpg';
import Canvas1 from './../assets/canvasses.jpg';
import ".././css/landing.css"

function Headercel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div class="carouselimg">
          <img
            className="d-block w-100"
            src={Specialpen}
            alt="First slide"
            height={500}
          />
        </div>
        <Carousel.Caption>
          <h3>Super cool fountain tip pen</h3>
          <p>It's literally so cool I swear ta god buy it</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="carouselimg">
          <img
            className="d-block w-100"
            src={Brushes1}
            alt="Second slide"
            height={500}
          />
        </div>
        <Carousel.Caption>
          <h3>These brushes</h3>
          <p>Are on special too, buy them pls pls pls</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="carouselimg">
          <img
            className="d-block w-100"
            src={Canvas1}
            alt="Third slide"
            height={500}
          />
        </div>
        <Carousel.Caption>
          <h3>A4 canvasses</h3>
          <p>
            Maybe buy one of these to go with your brushes? Please?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headercel;
import slide1 from '../../assets/uploads/slide-1.jpg'
import slide2 from '../../assets/uploads/slide-2.jpg'
import slide3 from '../../assets/uploads/slide-3.jpg'
import Brands from '../../components/Brands/Brands';
import FeedBack from '../../components/FeedBack/FeedBack';

const Home = () => {
  return (
    <>
      <div id="mainCarousel" className="carousel slide mb-100">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt=""/>
            <div className="carousel-caption text-start top-50 translate-middle-y">
              <p className="slide-text fw-semibold lh-sm mb-2 mb-md-3 mb-xxl-5">
                Summer<br/>Value Pack
              </p>
              <a href="#" className="slide-button btn btn-info bg-white px-5 fs-5">
                Shop Now
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt=""/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <Brands/>
      <FeedBack/>
    </>
  );
};

export default Home;
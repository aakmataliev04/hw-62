
const Combos = () => {
  return (
    <div className="combos-block" style={{ margin: '30px 0' }}>
      <div className="container-xxl">
        <h3 className="lh-1 mt-0 ps-3 fs-2 fw-bold combos-title" style={{ color: '#3C4242', marginBottom: '70px', borderLeft: '6px solid #8A33FD' }}>Special Combos</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 d-flex gap-md-5 justify-content-center">

          <div className="card" style={{ width: '18rem' }}>
            <img src={'https://img.alicdn.com/imgextra/i3/353571709/O1CN011OUlLdERWYCx0tz_!!353571709.jpg'} className="card-img-top" alt="combo"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={'https://img.alicdn.com/imgextra/i4/353571709/O1CN011OUlLdbRc0jGc0b_!!0-item_pic.jpg'} className="card-img-top" alt="combo"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={'https://ir.ozone.ru/s3/multimedia-m/c1000/6800726218.jpg'} className="card-img-top" alt="combo"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Combos;


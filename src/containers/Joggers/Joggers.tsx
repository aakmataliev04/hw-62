const Joggers = () => {
  return (
    <div>
      <div className="joggers-block" style={{ margin: '30px 0' }}>
        <div className="container-xxl">
          <h3 className="lh-1 mt-0 ps-3 fs-2 fw-bold" style={{ color: '#3C4242', marginBottom: '20px', borderLeft: '6px solid #8A33FD' }}>Joggers</h3>
          <p style={{color: "grey"}}>Joggers are generally baggy on the top and skinny at the bottom with an extended elastic cuff at the bottom of the legs. Joggers, as the name itself, says, are made for physical activities. They give you maximum comfort and mobility as the materials that are used are meant to be ideal for your athletic needs.</p>
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex gap-md-5 justify-content-center">

            <div className="card" style={{ width: '18rem' }}>
              <img src='https://bluetyga.com/cdn/shop/products/denim-travel-joggers-blue-tyga-14.jpg?v=1697555763' className="card-img-top" alt="combo"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src='https://ae01.alicdn.com/kf/S15986e3a5dc14a21ad7ed76adbce1a94o/2023-New-Men-s-Sweatpants-Baggy-Joggers-Fashion-Letter-Hip-Hop-Streetwear-Harem-Pant-Men-Casual.jpg' className="card-img-top" alt="combo"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPyT5EQVETB2mIYvHtlRSCNiHzTWmTke6giauywMuEPU5JpEBv' className="card-img-top" alt="combo"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Joggers;
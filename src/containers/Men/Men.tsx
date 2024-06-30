import React from 'react';
import card1 from '../../assets/uploads/card-1.jpg';
import card2 from '../../assets/uploads/card-2.jpg';
import card3 from '../../assets/uploads/card-3.jpg';
import card4 from '../../assets/uploads/card-4.jpg';

const Men = () => {
  return (
    <div className="men-cloth-block" style={{ margin: '120px 0' }}>
      <div className="container-xxl">
        <h3
          className="lh-1 mt-0 ps-3 fs-2 fw-bold men-cloth-tittle"
          style={{
            color: '#3C4242',
            marginBottom: '70px',
            borderLeft: '6px solid #8A33FD'
          }}
        >
          Categories For Men
        </h3>
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4">
          <div className="col d-flex justify-content-center">
            <div className="card h-100 border-0 card-first-group">
              <img src={card1} className="card-img-top" alt="card-pic" />
              <a
                href="#"
                className="card-body p-0 py-3 text-decoration-none d-flex"
                style={{ color: '#2A2F2F' }}
              >
                <h5 className="fs-6 fw-semibold" style={{ color: '#2A2F2F' }}>
                  Shirts
                </h5>
                <i className="bi bi-arrow-right ms-auto"></i>
              </a>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card h-100 border-0 card-first-group">
              <img src={card2} className="card-img-top" alt="card-pic" />
              <a
                href="#"
                className="card-body p-0 py-3 text-decoration-none d-flex"
                style={{ color: '#2A2F2F' }}
              >
                <h5 className="fs-6 fw-semibold" style={{ color: '#2A2F2F' }}>
                  Printed T-Shirts
                </h5>
                <i className="bi bi-arrow-right ms-auto"></i>
              </a>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card h-100 border-0 card-first-group">
              <img src={card3} className="card-img-top" alt="card-pic" />
              <a
                href="#"
                className="card-body p-0 py-3 text-decoration-none d-flex"
                style={{ color: '#2A2F2F' }}
              >
                <h5 className="fs-6 fw-semibold" style={{ color: '#2A2F2F' }}>
                  Plain T-Shirt
                </h5>
                <i className="bi bi-arrow-right ms-auto"></i>
              </a>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card h-100 border-0 card-first-group">
              <img src={card4} className="card-img-top" alt="card-pic" />
              <a
                href="#"
                className="card-body p-0 py-3 text-decoration-none d-flex"
                style={{ color: '#2A2F2F' }}
              >
                <h5 className="fs-6 fw-semibold" style={{ color: '#2A2F2F' }}>
                  Polo T-Shirt
                </h5>
                <i className="bi bi-arrow-right ms-auto"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
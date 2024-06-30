import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer py-sm-5" style={{ background: 'lightblue' }}>
        <div className="container-xxl footer-inner d-flex align-items-center px-lg-5">
          <div className="fs-5 fw-normal text-black-50 footer-text me-4">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </div>
          <div className="socials d-flex gap-3 ms-auto">
            <a href="#" className="socials-link text-decoration-none">
              <i className="bi bi-facebook" style={{ width: '37px', fontSize: '37px', color: 'cadetblue' }}></i>
            </a>
            <a href="#" className="socials-link text-decoration-none">
              <i className="bi bi-instagram" style={{ width: '37px', fontSize: '37px', color: 'cadetblue' }}></i>
            </a>
            <a href="#" className="socials-link text-decoration-none">
              <i className="bi bi-twitter" style={{ width: '37px', fontSize: '37px', color: 'cadetblue' }}></i>
            </a>
            <a href="#" className="socials-link text-decoration-none">
              <i className="bi bi-linkedin" style={{ width: '37px', fontSize: '37px', color: 'cadetblue' }}></i>
            </a>
          </div>
        </div>
      </footer></>
  );
};

export default Footer;
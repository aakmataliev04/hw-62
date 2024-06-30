import brand1 from '../../assets/brand-1.png';
import brand2 from '../../assets/brand-2.png';
import brand3 from '../../assets/brand-3.png';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';

const Brands = () => {
  return (
    <div className="brands-block" style={{ marginBottom: '100px' }}>
      <div className="container-xxl brands-inner" style={{ background: '#3C4242', borderRadius: '12px' }}>
        <h3 className="text-white mt-0 mb-3 text-center fw-bold brands-tittle" style={{ fontSize: '50px' }}>Top Brands Deal</h3>
        <div className="brand-box d-flex justify-content-center flex-wrap" style={{ gap: '24px' }}>
          <a href="#" className="brand-item bg-white d-flex justify-content-center align-items-center rounded-3" style={{ width: '178px', height: '86px' }}><img src={brand1} alt="brand-pic" /></a>
          <a href="#" className="brand-item bg-white d-flex justify-content-center align-items-center rounded-3" style={{ width: '178px', height: '86px' }}><img src={brand2} alt="brand-pic" /></a>
          <a href="#" className="brand-item bg-white d-flex justify-content-center align-items-center rounded-3" style={{ width: '178px', height: '86px' }}><img src={brand3} alt="brand-pic" /></a>
          <a href="#" className="brand-item bg-white d-flex justify-content-center align-items-center rounded-3" style={{ width: '178px', height: '86px' }}><img src={brand4} alt="brand-pic" /></a>
          <a href="#" className="brand-item bg-white d-flex justify-content-center align-items-center rounded-3" style={{ width: '178px', height: '86px' }}><img src={brand5} alt="brand-pic" /></a>
        </div>
      </div>
    </div>
  );
};

export default Brands;

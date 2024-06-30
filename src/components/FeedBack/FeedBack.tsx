import feedBack1 from '../../assets/uploads/feed-back-1.jpg';
import feedBack2 from '../../assets/uploads/feed-back-2.jpg';
import feedBack3 from '../../assets/uploads/feed-back-3.jpg';

const FeedBack = () => {
  return (
    <div className="feed-back-block" style={{ marginBottom: '90px' }}>
      <div className="container-xxl">
        <h3 className="lh-1 mt-0 ps-3 fs-2 fw-bold men-cloth-tittle" style={{ color: '#3C4242', marginBottom: '70px', borderLeft: '6px solid #8A33FD' }}>Feedback</h3>
        <div className="feed-back-box d-flex justify-content-center flex-wrap gap-4">

          <div className="card pt-4 flex-grow-1" style={{ textAlign: 'center' }}>
            <img src={feedBack1} className="feed-back-img" alt="client-pic" style={{ width: '58px', height: 'auto', margin: '0 auto' }}/>
            <div className="card-body">
              <h5 className="my-3 fw-medium card-title" style={{ color: '#3C4242', fontSize: '22px' }}>Floyd Miles</h5>
              <p className="fs-6 fw-normal card-text" style={{ color: '#807D7E' }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit </p>
            </div>
          </div>

          <div className="card pt-4 flex-grow-1" style={{ textAlign: 'center' }}>
            <img src={feedBack2} className="feed-back-img" alt="client-pic" style={{ width: '58px', height: 'auto', margin: '0 auto' }}/>
            <div className="card-body">
              <h5 className="my-3 fw-medium card-title" style={{ color: '#3C4242', fontSize: '22px' }}>Ronald Richards</h5>
              <p className="fs-6 fw-normal card-text" style={{ color: '#807D7E' }}>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
            </div>
          </div>

          <div className="card pt-4 flex-grow-1" style={{ textAlign: 'center' }}>
            <img src={feedBack3} className="feed-back-img" alt="client-pic" style={{ width: '58px', height: 'auto', margin: '0 auto' }}/>
            <div className="card-body">
              <h5 className="my-3 fw-medium card-title" style={{ color: '#3C4242', fontSize: '22px' }}>Savannah Nguyen</h5>
              <p className="fs-6 fw-normal card-text" style={{ color: '#807D7E' }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeedBack;

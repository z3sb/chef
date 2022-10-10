import React from 'react';
import './download.css';
import appImg from '../../assets/images/app.png';
import { Container, Row, Col } from 'reactstrap';


const Download = () => {
  return (
    <section>
      <Container className="app__container">
        <Row>
          <Col lg='6' md='6'>
            <div className="app__img">
              <img src={appImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="app__content">
              <h5>Download our app</h5>
              <h2 className='mb-4'>Never Fell Hungry! Download Our Mobile App Order Delicious Food</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Non mollitia accusamus ut dolores et earum provident corporis laborum debitis? Quas.
              </p>
              <div className="app__btns d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple d-flex align-items-center gap-3">
                  <i className="ri-apple-line"></i><a href="#apple">Apple Store</a>
                </button>
                <button className="btn__google d-flex align-items-center gap-3">
                  <i className="ri-google-play-line"></i><a href="#google">Google Play</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Download;
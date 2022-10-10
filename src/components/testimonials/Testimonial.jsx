import React from 'react';
import './Testimonial.css';
import { Container, Row, Col } from 'reactstrap';
import TestimonialImage from '../../assets/images/review1.png';
import Slider from 'react-slick';
const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' md='12' sm='12' className='m-auto'>
            <div className="slider__wrapper d-flex align-items-center gap-5">
              <div className="slider__content">
                <h2 className='mb-4'>What our Customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "We chose to eat here and the service provided was excellent. The food was good as well, 
                        but the positive attitude and level of service provided was what we noticed the most.
                        We chose to eat here and the service provided was excellent. The food was good as well, 
                        but the positive attitude and level of service provided was what we noticed the most."
                      </p>
                      <h6>Haider Fadel</h6>
                      <p>Front End Developer</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "I normally don't write reviews for fast food. However this place stands out. 
                        It is clean, friendly service, and much better than average food for the price. 
                        I tried a baked potato and it was as good as any baked potato in any restaurant! This is a great place!"
                      </p>
                      <h6>Yasser Rafid</h6>
                      <p>BackEnd Developer & Penetration Tester</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "I stopped in the other day and had a combo of fried fish and breaded shrimp. 
                        I t was very good. Last time I tried Chef Food in Columbia I didn't like their crab so much. 
                        I stayed with what I like and the corn on the cob and the fried okra was very good."
                      </p>
                      <h6>Osama Hashim</h6>
                      <p>network administrator</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "After eating at this restaurant 3-4 times, 
                        the thing my wife and I have commented on the most is the Staff...we have gotten 
                        quick and excellent service not only at the register but the staff is constantly 
                        checking on the tables to make sure everything is to your liking. 
                        I told one waitress that it was like Publix is to other grocery stores....the outstanding feature is the Staff"
                      </p>
                      <h6>Ali Ahmed</h6>
                      <p>BackEnd Developer</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider__img">
                <img src={TestimonialImage} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Testimonial;
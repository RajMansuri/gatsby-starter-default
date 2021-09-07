import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../Styles/About.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function AboutCorvex() {
  return (
    <>
      <div className="about-us-container">
        <Container className="corvex-container">
          <Row xs="1" xl="2" className="mt-5">
            <Col className="text-right-rtl">
              <div className="about-content-box">
                <div className="corvex-sub-header text-left">
                  <div className="corvex-title-container">
                    <h1 className="corvex-title text-left">About Corvex</h1>
                    <i class="fa fa-minus right"></i>
                  </div>
                  <h2>
                    Traditional &amp; Modern
                    <br /> Service Since 1970
                  </h2>
                </div>
                <div className="inner-content">
                  <div className="text">
                    <p>
                      Consectetur adipisicing elit sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim est laborum.
                    </p>
                  </div>
                  <div className="button-box">
                    <a className="btn-custom" href="/">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="">
              <div className="about-container">
                <div className="shape1">
                  <img
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-7.png"
                    alt="..."
                  />
                </div>
                <div className="shape2">
                  <img
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-6.png"
                    alt="..."
                  />
                </div>
                <div className="shape3">
                  <img
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-6.png"
                    alt="..."
                  />
                </div>
                <div className="shape4">
                  <img
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-8.png"
                    alt="..."
                  />
                </div>
                <ScrollAnimation
                  animateOnce={true}
                  duration={4}
                  animateIn="animate__slideInRight"
                >
                  <div className="about-image-container">
                    <img
                      className="img-fluid"
                      src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/about-style3-image.png"
                      alt="..."
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="choose-area mt-5">
        <Row className="choose-container m-0">
          <Col className="choose-image-box">
            <div className="inner">
              <img
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/resources/choose-image.jpg"
                alt="..."
              />
            </div>
          </Col>
          <Col className="choose-content-box ">
            <div className="inner">
              <div className="shape1">
                <img
                  src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/foooter-shape-1.png"
                  alt="..."
                />
              </div>
              <div className="corvex-sub-header text-left">
                <div className="corvex-title-container">
                  <h1 className="corvex-title">Why Choose</h1>
                  <i class="fa fa-minus right"></i>
                </div>
                <h2 className="text-white">
                  We Provide Best Meat From
                  <br />
                  Our Corvex Farm
                </h2>
              </div>
              <ul>
                <li>
                  <div className="corvex-icon-holder">
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                  </div>
                  <div className="title-holder">
                    <h3>Fresh Meat</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eius mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam quis.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="corvex-icon-holder">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <div className="title-holder">
                    <h3>24 hrs Open</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eius mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam quis.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

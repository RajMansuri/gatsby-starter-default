import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Card, CardTitle, Container, Row, Col } from "reactstrap";
import "../Styles/Testimonials.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function Testimonials() {
  const items = [
    {
      src: "//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/slides/slide-v3-1.jpg",
    },
    {
      src: "//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/slides/slide-v3-2.jpg",
    },
    {
      src: "//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/slides/slide-v3-3.jpg",
    },
  ];

  return (
    <>
      <div className="pt-5">
        <Card
          style={{
            backgroundImage:
              'url("https://f.hubspotusercontent30.net/hubfs/20093980/blog-v3-5-2.jpg")',
          }}
          className="contact-card"
        >
          <div className="slogan-content-box">
            <Container>
              <div className="title-box" tag="h5">
                <h1>
                  {" "}
                  You Can Call Anytime To
                  <br /> Get Our Product
                </h1>
              </div>
              <div className="button-box">
                <a className="btn-custom m-0">
                  <i
                    class="fa fa-phone"
                    aria-hidden="true"
                    style={{ marginRight: 10 }}
                  ></i>
                  Call Us: 333-666-0001
                </a>
              </div>
            </Container>
          </div>
        </Card>
      </div>
      <Container className="corvex-container">
        <Row xs="1" xl="2" className="testimonial-content">
          <Col>
            <div className="testimonial-image-box ">
              <div className="shape1">
                <img
                  src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-5.png"
                  alt="."
                />
              </div>
              <div className="shape2">
                <img
                  src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-12.png"
                  alt="."
                />
              </div>
              <div className="inner">
                <img
                  src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/testimonial-big-image-3.png"
                  alt="."
                />
                <div className="quote-icon">
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="testimonial-content ">
              <div className="corvex-sub-header text-left">
                <div className="corvex-title-container">
                  <h1 className="corvex-title">TESTIMONIALS</h1>
                  <i class="fa fa-minus right"></i>
                </div>
                <h2 className="testimonial-sub-title">
                  What Our Clients Say
                  <br />
                  About Corvex?
                </h2>
              </div>
              <OwlCarousel
                items={1}
                className="owl-theme"
                loop
                nav
                autoplay
                navText={[
                  "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
                  "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>",
                ]}
                navContainerClass="direction-nav"
                margin={8}
                dots={false}
              >
                <>
                  {items.map((item) => {
                    return (
                      <div className="single-testimonial-style1">
                        <div className="quote-icon-box">
                          <i class="fa fa-quote-right" aria-hidden="true"></i>
                        </div>
                        <div className="text-box">
                          <p>
                            Our goal each day is to ensure that our residents
                            needs are not only met but exceeded. To make that
                            happen we are committed to providingesidentsof
                            amenities that allow them to feel independent.
                          </p>
                        </div>
                        <div className="client-info">
                          <div className="image-box">
                            <img
                              src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/tes-v1-1.png"
                              alt="..."
                            />
                          </div>
                          <div className="title-box">
                            <h3>Rebeka Dawson</h3>
                            <span>Instructor</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="customer-experience position-relative container">
        <Col>
          <Row xs="1" md="2" lg="4" className="fact-counter-box">
            <Col className="p-0">
              <ScrollAnimation
                animateOnce={true}
                duration={1.5}
                delay={100}
                animateIn="animate__fadeInUp"
              >
                <div className="text-center single-fact-counter">
                  <div className="count-box">
                    <h2>
                      <span className="timer">20</span>
                      <span className="k"></span>
                    </h2>
                    <div className="sub-title">
                      <h5>Year of Experience</h5>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>

            <Col className="p-0">
              <ScrollAnimation
                animateOnce={true}
                duration={1.5}
                delay={100}
                animateIn="animate__fadeInUp"
              >
                <div className="single-fact-counter text-center">
                  <div className="count-box">
                    <h2>
                      <span className="timer">4</span>
                      <span className="k">k</span>
                    </h2>
                    <div className="sub-title">
                      <h5>Satisfied Clients</h5>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
            <Col className="p-0">
              <ScrollAnimation
                animateOnce={true}
                duration={1.5}
                delay={100}
                animateIn="animate__fadeInUp"
              >
                <div className="single-fact-counter text-center">
                  <div className="count-box">
                    <h2>
                      <span className="timer">3</span>
                      <span className="k">k</span>
                    </h2>
                    <div className="sub-title">
                      <h5>Total Calls</h5>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
            <Col className="p-0">
              <ScrollAnimation
                animateOnce={true}
                duration={1.5}
                delay={100}
                animateIn="animate__fadeInUp"
              >
                <div className="text-center single-fact-counter">
                  <div className="count-box">
                    <h2>
                      <span className="timer">45</span>
                      <span className="k"></span>
                    </h2>
                    <div className="sub-title">
                      <h5>Awards Win</h5>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
            <div className="shape1">
              <img
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-6.png"
                alt="..."
              />
            </div>
            <div className="shape2">
              <img
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-6.png"
                alt="..."
              />
            </div>
          </Row>
        </Col>
      </div>
    </>
  );
}

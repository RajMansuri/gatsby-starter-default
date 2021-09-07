import React from "react";
import "../Styles/Footer.css";
import {
  Card,
  CardText,
  Col,
  Container,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container className="corvex-container position-relative">
        <div className="shape1">
          <img
            src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/foooter-shape-1.png"
            alt="..."
          />
        </div>
        <div className="shape2">
          <img
            src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/foooter-shape-2.png"
            alt="..."
          />
        </div>
        <div className="shape3">
          <img
            src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/foooter-shape-3.png"
            alt="..."
          />
        </div>
        <Row style={{ overflow: "hidden" }} xs="1" md="2" lg="3">
          <Col>
            <ScrollAnimation
              animateOnce={true}
              delay={300}
              animateIn="animate__fadeInUp"
            >
              <div className="mb-5 mr-4">
                <NavLink className="py-3 px-1" href="/">
                  <img
                    src="https://f.hubspotusercontent30.net/hub/20093980/hubfs/corvex.png?width=172&name=corvex.png"
                    style={{ width: 150, borderWidth: 0, border: 0 }}
                    width="172"
                    alt="..."
                    title="corvex"
                  />
                </NavLink>
                <p className="">
                  Nostrud exertation ullamco labor nisi aliquip commodo duis.
                </p>
                <Nav vertical className="contact-details">
                  <NavItem>
                    <div className="icon">
                      <i
                        className="fa fa-map-marker"
                        style={{ marginRight: 10 }}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text">
                      <p className="m-0">
                        Flat 20, Reynolds Neck, North
                        <br /> Helenaville, FV77 8WS
                      </p>
                    </div>
                  </NavItem>
                  <NavItem className="d-flex">
                    <div className="icon">
                      <i
                        className="fa fa-phone"
                        style={{ marginRight: 10 }}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <p className="text m-0">
                      Call Us:
                      <a className="ml-1" href="/">
                        333-666-0001
                      </a>
                    </p>
                  </NavItem>
                  <NavItem>
                    <div className="icon">
                      <i
                        className="fa fa-envelope-o"
                        style={{ marginRight: 10 }}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text">
                      <a href="/">info@corvex.com</a>
                    </div>
                  </NavItem>
                </Nav>
              </div>
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation
              animateOnce={true}
              delay={300}
              animateIn="animate__fadeInUp"
            >
              <div className="usefulLink-container mb-5">
                <div className="usefulLink py-3">
                  <h3>Usefull Link</h3>
                </div>
                <Nav vertical>
                  <NavItem>
                    <NavLink href="/">About Company</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Services</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">How It Works</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Our Blog</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Contact Us</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation
              animateOnce={true}
              delay={700}
              animateIn="animate__fadeInUp"
            >
              <div className="top-selling-title py-3">
                <h3>Top Selling Product</h3>
              </div>
              <Nav vertical>
                <NavItem>
                  <Card
                    className="mb-3 border-0 footer-card"
                    style={{ maxWidth: 540 }}
                  >
                    <Row className="no-gutters">
                      <Col xs="4">
                        <img
                          src="https://f.hubspotusercontent30.net/hubfs/20093980/footer-product-thumb-1.png"
                          alt="..."
                        />
                      </Col>
                      <Col xs="8">
                        <div className="top-selling-items">
                          <a href="/">Fresh Mutton Cuts</a>
                          <div className="review-box my-2">
                            <Nav>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                            </Nav>
                          </div>
                          <CardText>$250.00 $150.00</CardText>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </NavItem>
                <NavItem>
                  <Card
                    className="mb-3 border-0 footer-card"
                    style={{ maxWidth: 540 }}
                  >
                    <Row className="no-gutters">
                      <Col xs="4">
                        <img
                          src="https://f.hubspotusercontent30.net/hubfs/20093980/footer-product-thumb-2.png"
                          alt="..."
                        />
                      </Col>
                      <Col xs="8">
                        <div className="top-selling-items">
                          <a href="/">Fresh Mutton Cuts</a>
                          <div className="review-box my-2">
                            <Nav>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                            </Nav>
                          </div>
                          <CardText>$250.00 $150.00</CardText>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </NavItem>
                <NavItem>
                  <Card
                    className="mb-3 border-0 footer-card"
                    style={{ maxWidth: 540 }}
                  >
                    <Row className="no-gutters">
                      <Col xs="4">
                        <img
                          src="https://f.hubspotusercontent30.net/hubfs/20093980/footer-product-thumb-3.png"
                          alt="..."
                        />
                      </Col>
                      <Col xs="8">
                        <div className="top-selling-items">
                          <a href="/">Fresh Mutton Cuts</a>
                          <div className="review-box my-2">
                            <Nav>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                              <NavItem>
                                <i className="fa fa-star"></i>
                              </NavItem>
                            </Nav>
                          </div>
                          <CardText>$250.00 $150.00</CardText>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </NavItem>
              </Nav>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <div className="footer-search-container">
        <Container className="footer-search-content">
          <ScrollAnimation
            animateOnce={true}
            duration={1.5}
            delay={100}
            animateIn="grow"
          >
            <Row className="d-flex justify-content-around footer-search m-0">
              <h3 className="footer-search-title">Subscribe Our Newsletters</h3>
              <Input
                className="footer-search-box"
                placeholder="Search"
                bsSize="lg"
              />
            </Row>
          </ScrollAnimation>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="copyright-text">
            <p className="m-0">
              <a href="/" className="copyright-title mr-1">
                Corvex
              </a>
              © 2021 All Right Reserved
            </p>
          </div>
          <Nav className="footer-copyright my-3 my-lg-0 corvex-rounded-icon">
            <NavItem>
              <NavLink href="/">
                <i className="fa fa-facebook"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <i className="fa fa-twitter"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <i className="fa fa-linkedin"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">
                <i className="fa fa-pinterest"></i>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="term-privacy">
            <NavItem className="" role="none">
              <a className="terms-servies py-0 px-3" href="/" target="_self">
                Terms of Service
              </a>
            </NavItem>
            <NavItem className="" role="none">
              <a className="px-3" href="/" target="_self">
                Privacy Policy
              </a>
            </NavItem>
          </Nav>
        </Container>
      </div>
    </div>
  );
}

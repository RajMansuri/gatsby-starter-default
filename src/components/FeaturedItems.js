import React from "react";
import "../Styles/FeaturedItems.css";
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody,
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  CardImgOverlay,
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
export default function FeaturedItems() {
  return (
    <Container className="corvex-container">
      <div className="corvex-sub-header">
        <div className="corvex-title-container">
          <i class="fa fa-minus left"></i>
          <h1 className="corvex-title">Featured Products</h1>
          <i class="fa fa-minus right"></i>
        </div>
        <h2>
          Enjoy Delicious Organic
          <br /> Meat.
        </h2>
        <p className="mb-2">
          Lorem ipsum dolor sit amet contur adipiscing elit. vamus lacinia
          <br />
          odio vitae vestibulum vestibulum.
        </p>
      </div>
      <CardDeck className="mx-0">
        <Row
          className="featuredItem-content position-relative"
          xs="1"
          md="2"
          xl="4"
        >
          <div className="shape1">
            <img
              src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-6.png"
              alt="..."
            />
          </div>
          <div className="shape2 ">
            <img
              src="https://f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-9.png"
              alt="..."
            />
          </div>
          <div className="shape3">
            <img
              className=""
              src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-10.png"
              alt="..."
            />
          </div>
          <Col>
            <ScrollAnimation
              animateOnce={true}
              duration={1.5}
              animateIn="animate__fadeInUp"
            >
              <Card className="border-0 mb-4 my-0 featured-card mx-0">
                <Card inverse className="m-0">
                  <CardImg
                    top
                    width="100%"
                    src={
                      "//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shop-1.jpg"
                    }
                    alt=""
                  />
                  <CardImgOverlay>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </CardImgOverlay>
                </Card>
                <CardBody className="title-holder">
                  <CardTitle tag="h5">Mutton Curry</CardTitle>
                  <div className="review-box">
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
                  <div className="rate-box">
                    <p>$350.00</p>
                  </div>
                  <div className="button-box">
                    <Nav>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          Contact Us
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation
              animateOnce={true}
              duration={1.5}
              animateIn="animate__fadeInUp"
            >
              <Card className="border-0 mb-4 featured-card mx-0">
                <Card inverse className="m-0">
                  <CardImg
                    top
                    width="100%"
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shop-2.jpg"
                    alt=""
                  />
                  <CardImgOverlay>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </CardImgOverlay>
                </Card>

                <CardBody className="title-holder">
                  <CardTitle tag="h5">Mutton Curry</CardTitle>
                  <div className="review-box">
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
                  <div className="rate-box">
                    <p>$350.00</p>
                  </div>
                  <div className="button-box">
                    <Nav>
                      <NavItem>
                        <a className="btn-custom" href="#">
                          Contact Us
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="#">
                          <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="#">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation
              animateOnce={true}
              duration={1.5}
              animateIn="animate__fadeInUp"
            >
              <Card className="border-0 mb-4 featured-card mx-0">
                <Card inverse className="m-0">
                  <CardImg
                    top
                    width="100%"
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shop-3.jpg"
                    alt=""
                  />
                  <CardImgOverlay>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </CardImgOverlay>
                </Card>

                <CardBody className="title-holder">
                  <CardTitle tag="h5">Mutton Curry</CardTitle>
                  <div className="review-box">
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
                  <div className="rate-box">
                    <p>$350.00</p>
                  </div>
                  <div className="button-box">
                    <Nav>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          Contact Us
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </ScrollAnimation>
          </Col>

          <Col>
            <ScrollAnimation
              animateOnce={true}
              duration={1.5}
              animateIn="animate__fadeInUp"
            >
              <Card className="border-0 mb-4 featured-card mx-0">
                <Card inverse className="inner m-0">
                  <CardImg
                    top
                    width="100%"
                    src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shop-4.jpg"
                    alt=""
                  />
                  <CardImgOverlay>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </CardImgOverlay>
                </Card>
                <CardBody className="title-holder">
                  <CardTitle tag="h5">Mutton Curry</CardTitle>
                  <div className="review-box">
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
                  <div className="rate-box">
                    <p>$350.00</p>
                  </div>
                  <div className="button-box">
                    <Nav>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          Contact Us
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                      <NavItem>
                        <a className="btn-custom" href="/">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </NavItem>
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>
      </CardDeck>
      <Row>
        <Col>
          <div className="product-button text-center">
            <a className="btn-custom mt-0" href="/">
              Contact Us
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

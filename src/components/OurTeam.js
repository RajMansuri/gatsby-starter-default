import React from "react";
import "../Styles/OurTeam.css";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  CardImgOverlay,
  CardImg,
  Card,
} from "reactstrap";
export default function OurTeam() {
  return (
    <div>
      <Container style={{ paddingBottom: 50 }} className="corvex-container">
        <div className="corvex-sub-header">
          <div className="corvex-title-container">
            <i class="fa fa-minus left"></i>
            <h1 className="corvex-title">Our Team</h1>
            <i class="fa fa-minus right"></i>
          </div>
          <h2>
            Meet Our All Creative
            <br /> Person
          </h2>
        </div>
        <Row className="">
          <Col>
            <div className="team-content position-relative">
              <div className="shape1">
                <img
                  src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/shape/shape-2.png"
                  alt="..."
                />
              </div>
              <Row xs="1" lg="3">
                <Col>
                  <div className="single-team-item">
                    <Card inverse className="inner border-0">
                      <CardImg
                        width="100%"
                        src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/team/team-v2-1.png"
                        className="img-fluid"
                        alt="..."
                      />
                      <CardImgOverlay className="">
                        <div className="social-icon">
                          <Nav className="corvex-rounded-icon">
                            <NavItem>
                              <NavLink href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#" className="linkedin">
                                <i className="fa fa-linkedin"></i>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </CardImgOverlay>
                    </Card>
                    <div className="title-holder">
                      <h3>
                        <a href="/" className="single-team-name">
                          Elsie-Rose Kane
                        </a>
                      </h3>
                      <p className="">Founder</p>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="single-team-item ">
                    <Card inverse className="inner border-0">
                      <CardImg
                        width="100%"
                        src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/team/team-v2-2.png"
                        className="img-fluid"
                        alt="..."
                      />
                      <CardImgOverlay className="">
                        <div className="social-icon">
                          <Nav className="corvex-rounded-icon">
                            <NavItem>
                              <NavLink href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#" className="linkedin">
                                <i className="fa fa-linkedin"></i>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </CardImgOverlay>
                    </Card>
                    <div className="title-holder">
                      <h3>
                        <a href="#" className="single-team-name">
                          Elsie-Rose Kane
                        </a>
                      </h3>
                      <p className="">Founder</p>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="single-team-item">
                    <Card inverse className="inner border-0">
                      <CardImg
                        width="100%"
                        src="////f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/team/team-v2-3.png"
                        className="img-fluid"
                        alt="..."
                      />
                      <CardImgOverlay className="">
                        <div className="social-icon">
                          <Nav className="corvex-rounded-icon">
                            <NavItem>
                              <NavLink href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#" className="linkedin">
                                <i className="fa fa-linkedin"></i>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </CardImgOverlay>
                    </Card>
                    <div className="title-holder">
                      <h3>
                        <a href="/" className="single-team-name">
                          Elsie-Rose Kane
                        </a>
                      </h3>
                      <p className="thm_clr1">Founder</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <Row xs="1" md="2" xl="4">
          <Col>
            <Card className="single-gallery-item">
              <CardImg
                width="100%"
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-1.jpg"
                className="img-fluid"
                alt="..."
              />
              <CardImgOverlay className="">
                <a
                  className=""
                  href="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-1.jpg"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </CardImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="single-gallery-item">
              <CardImg
                width="100%"
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-2.jpg"
                className="img-fluid"
                alt="..."
              />
              <CardImgOverlay className="">
                <a
                  className=""
                  href="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-1.jpg"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </CardImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="single-gallery-item">
              <CardImg
                width="100%"
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-2.jpg"
                className="img-fluid"
                alt="..."
              />
              <CardImgOverlay className="">
                <a
                  className=""
                  href="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-3.jpg"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </CardImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="single-gallery-item">
              <CardImg
                width="100%"
                src="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-4.jpg"
                className="img-fluid"
                alt="..."
              />
              <CardImgOverlay>
                <a href="//f.hubspotusercontent30.net/hubfs/20093980/raw_assets/public/corvex/images/gallery/gallery-v1-3.jpg">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

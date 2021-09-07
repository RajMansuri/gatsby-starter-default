import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Card, CardTitle, Col, Container, Row } from "reactstrap";
import "../Styles/Carousel.css";
export default function Carousel() {
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
      <section id="slider">
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop
          nav
          dots={false}
          navContainerClass="direction-container"
          margin={0}
          autoplay
          addClassActive
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          navText={[
            "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
            "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>",
          ]}
        >
          <>
            {items.map((item, i) => {
              return (
                <Card
                  key={`${Math.random()}-${i}`}
                  style={{ backgroundImage: "url(" + item.src + ")" }}
                  className="carousel-body"
                >
                  <div className="carousel-background">
                    <div className="carousel-items text-center">
                      <div className="carousel-content">
                        <div className="big-title">
                          <CardTitle tag="h5">
                            Enjoy Delicious Organic
                            <br /> Meat.
                          </CardTitle>
                        </div>
                        <h3 className="text-white carousel-sub-title">
                          Discover your next great adventure.
                        </h3>
                        <a className="btn-custom mt-4" href="/">
                          learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </>
        </OwlCarousel>
      </section>
      <Container className="carousel-footer-container">
        <Col xs="12">
          <Row xs="1" lg="3" className="carousel-footer mx-0">
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
            <Col className="p-0">
              <div className="carousel-footer-items text-center">
                <div className="corvex-icon-holder">
                  <i class="fa fa-cutlery" aria-hidden="true"></i>
                </div>
                <div className="title-holder">
                  <h3>Veal Entrecote</h3>
                  <p className="corvex-text">
                    Lorem ipsum dolor sit amet contur adipiscing elit vam us
                    lacinia odio vestibulum. vestibulum.
                  </p>
                  <div className="button-box">
                    <a className="btn-custom" href="/">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="p-0">
              <div className="carousel-footer-items text-center">
                <div className="corvex-icon-holder">
                  <i class="fa fa-cutlery" aria-hidden="true"></i>
                </div>
                <div className="title-holder">
                  <h3>Beaf Ribs</h3>
                  <p className="corvex-text">
                    Lorem ipsum dolor sit amet contur adipiscing elit vam us
                    lacinia odio vestibulum. vestibulum.{" "}
                  </p>
                  <div className="button-box">
                    <a className="btn-custom" href="/">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="p-0">
              <div className="carousel-footer-items text-center border-0">
                <div className="corvex-icon-holder">
                  <i class="fa fa-cutlery" aria-hidden="true"></i>
                </div>
                <div className="title-holder">
                  <h3>Beaf Tenderloin</h3>
                  <p className="corvex-text">
                    Lorem ipsum dolor sit amet contur adipiscing elit vam us
                    lacinia odio vestibulum. vestibulum.
                  </p>
                  <div className="button-box">
                    <a className="btn-custom" href="/">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}

import React from "react";
import "../Styles/Articles.css";
import {
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

export default function Articles(props) {
  return (
    <Container className="corvex-container">
      <div className="corvex-sub-header">
        <div className="corvex-title-container">
          <i class="fa fa-minus left"></i>
          <h1 className="corvex-title">Articles</h1>
          <i class="fa fa-minus right"></i>
        </div>
        <h2>
          Stay Update with
          <br /> Corvex
        </h2>
      </div>
      <Row xs="1" lg="3">
        <Col>
          <ScrollAnimation
            animateOnce={true}
            duration={1.5}
            animateIn="animate__fadeInUp"
          >
            <Card className="mb-4 border-0 article-card">
              <Card inverse className="m-0">
                <CardImg
                  top
                  width="100%"
                  src="	https://f.hubspotusercontent30.net/hubfs/20093980/blog-v3-1-1.jpg"
                  alt="..."
                />
              </Card>
              <CardBody>
                <CardTitle tag="h5">
                  The days of weighing up about websites.
                </CardTitle>
                <p className="mb-2">Rashid MazafuzJune 20 2021</p>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing sed. do
                  eiusmod tempor incididunt labore dolore ...
                </p>
                <a className="btn-custom">Read More</a>
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
            <Card className="mb-4 border-0 article-card">
              <Card inverse className="m-0">
                <CardImg
                  top
                  width="100%"
                  src="https://f.hubspotusercontent30.net/hubfs/20093980/blog-v3-2-1.jpg"
                  alt="..."
                />
              </Card>
              <CardBody>
                <CardTitle tag="h5">
                  Get few solutions to hire a best candidate.
                </CardTitle>
                <p className="mb-2">Nasim Uddin June 20 2021</p>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing sed. do
                  eiusmod tempor incididunt labore dolore ...
                </p>
                <a className="btn-custom">Read More</a>
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
            <Card className="mb-4 border-0 article-card">
              <Card inverse className="m-0">
                <CardImg
                  top
                  width="100%"
                  src="https://f.hubspotusercontent30.net/hubfs/20093980/blog-v3-5-2.jpg"
                  alt="..."
                />
              </Card>
              <CardBody>
                <CardTitle tag="h5">
                  Get few solutions to hire a best candidate.
                </CardTitle>
                <p className="mb-2">Azim UddinJune 20 2021</p>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing sed. do
                  eiusmod tempor incididunt labore dolore ...
                </p>
                <a className="btn-custom">Read More</a>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
}

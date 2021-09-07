import React, { useState, useEffect } from "react";
import { Container, Nav, NavItem } from "reactstrap";
import Backdrop from "./Backdrop";
import StickyNavbar from "./StickyNavbar";
import "../Styles/Header.css";

export default function Header(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };
  const { socialLinks, contactLinks } = props.header.topHeader;
  return (
    <div className="header-container">
      <div className="header d-none d-lg-block">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between header-icon-container">
              <label className="text-white m-0">Share with on: </label>
              {
                socialLinks.map(data => (
                  <a key={data.id} href={data.link}>
                    <i className={`fa ${data.logo}`}></i>
                  </a>
                ))
              }
            </div>
            <Nav className="d-flex contact">
              {contactLinks.map((data, i) => (
                <NavItem key={data.id}>
                  <i
                    className={`fa ${data.logo}`}
                    style={{ marginRight: 10 }}
                    aria-hidden="true"
                  ></i>
                  {i === 2 && <span className="text-white">Call Us:</span>}
                  <a className={i === 2 && 'border-0 m-0 p-0'} href={data.link}>{data.text}</a>
                </NavItem>
              ))}
            </Nav>
          </div>
        </Container>
      </div>
      <StickyNavbar navbar={props.header.navbar} toggleNavbar={toggleNavbar} />
      {!collapsed && <Backdrop setCollapsed={setCollapsed} />}
      {isVisible && (
        <div className="btn-top" onClick={scrollToTop}>
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </div>
      )}
    </div>
  );
}

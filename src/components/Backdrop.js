import React, { useState } from 'react'
import {
    Collapse,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
export default function Backdrop(props) {
    const [isOpenNews, setIsOpenNews] = useState(false);
    const [isOpenPages, setIsOpenPages] = useState(false);
    const [isOpenSystemPages, setIsOpenSystemPages] = useState(false);
    const toggle = (isOpen, setIsOpen) => setIsOpen(!isOpen);

    return (
        <>
            <div
                className="backdrop-background slide-animation"
                onClick={() => props.setCollapsed(true)}
            ></div>
            <div className="backdrop slide-animation">
                <div
                    className="btn-close rotate-on-hover"
                    onClick={() => props.setCollapsed(true)}
                >
                    <i className="fa fa-times"></i>
                </div>
                <NavbarBrand className="p-4 mr-0" href="/">
                    <img
                        src="https://f.hubspotusercontent30.net/hub/20093980/hubfs/corvex.png?width=172&name=corvex.png"
                        alt="..."
                    />
                </NavbarBrand>
                <Nav navbar className="navbar-items">
                    <NavItem>
                        <NavLink href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className="dropdown-container">
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            Pages
                        </NavLink>
                        <div
                            className={`corvex-dropdown-button ${isOpenPages && "active"
                                } `}
                            onClick={() => toggle(isOpenPages, setIsOpenPages)}
                        >
                            <i className="fa fa-caret-right"></i>
                        </div>
                        <Collapse isOpen={isOpenPages}>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink>Our Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Testimonies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Gallery</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </NavItem>
                    <NavItem className="dropdown-container">
                        <NavLink href="/">System Pages</NavLink>
                        <div
                            className={`corvex-dropdown-button ${isOpenSystemPages && "active"
                                } `}
                            onClick={() =>
                                toggle(isOpenSystemPages, setIsOpenSystemPages)
                            }
                        >
                            <i className="fa fa-caret-right"></i>
                        </div>
                        <Collapse isOpen={isOpenSystemPages}>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink>Our Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Testimonies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Gallery</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </NavItem>
                    <NavItem className="dropdown-container">
                        <NavLink href="/">News</NavLink>
                        <div
                            className={`corvex-dropdown-button ${isOpenNews && "active"
                                } `}
                            onClick={() => toggle(isOpenNews, setIsOpenNews)}
                        >
                            <i className="fa fa-caret-right"></i>
                        </div>
                        <Collapse isOpen={isOpenNews}>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink>Our Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Testimonies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Gallery</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </>
    )
}

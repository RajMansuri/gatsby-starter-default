import React, { useState, useEffect } from 'react'
import Sticky from "react-sticky-el";
import { useMediaQuery } from "react-responsive";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
export default function StickyNavbar(props) {
    const [isSticky, setSticky] = useState(false);
    const isDisableSticky = useMediaQuery({ query: "(max-width: 1199px)" });

    useEffect(() => {
        if (isDisableSticky && isSticky) setSticky(false);
    }, [isDisableSticky]);

    const { brandLogoDark, brandLogoLight, menuLinks } = props.navbar;
    return (
        <div className="sticky-navbar-container">
            <Sticky
                disabled={isDisableSticky}
                onFixedToggle={() => setSticky(!isSticky)}
                topOffset={80}
                positionRecheckInterval={500}
            >
                <Container className="position-relative" id="corvex-header-top">
                    <Navbar
                        color="faded"
                        expand="xl"
                        className="py-0 px-0 d-flex justify-content-between justify-content-sm-start"
                    >
                        <NavbarBrand href="/">
                            <img
                                src={
                                    !isSticky || isDisableSticky
                                        ? brandLogoDark.file.url
                                        : brandLogoLight.file.url
                                }
                                alt="..."
                            />
                        </NavbarBrand>
                        <div className='nav-toggler-container'>
                            <NavbarToggler onClick={props.toggleNavbar} className="mr-2 btn-toggle">
                                <i class="fa fa-solid fa-bars"></i>
                            </NavbarToggler>
                        </div>
                        <Collapse className="justify-content-center" navbar>
                            <Nav navbar className="text-right navbar-items">
                                {menuLinks.map((data, i) => (
                                    data.isMulti ?
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle className="font-weight-bold" nav caret>
                                                {data.label}
                                            </DropdownToggle>
                                            <DropdownMenu right className="m-0">
                                                {data.options.map((option, i) => (
                                                    <React.Fragment key={option.id}>
                                                        <DropdownItem>{option.label}</DropdownItem>
                                                        {data.options.length - 1 !== i && <DropdownItem divider />}
                                                    </React.Fragment>
                                                )
                                                )}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        :
                                        <NavItem key={data.id}>
                                            <NavLink className={`font-weight-bold`} href={data.redirectTo}>
                                                {data.label}
                                            </NavLink>
                                        </NavItem>
                                ))}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </Sticky>
        </div>
    )
}

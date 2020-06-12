import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
    return(
        <Navbar color='dark'>
            <NavbarBrand href=''>ReactWars</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href='https://github.com/elderdeux/Sprint-Challenge-React-Wars'>GitHub Code</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='https://swapi.dev/'>API</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;
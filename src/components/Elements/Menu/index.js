import React from 'react'
import { Wrapper, Nav, NavItem, NavLink } from './style'
import Logo from "../Logo"

const Menu = () =>
    <Wrapper>
        <Nav>
            <NavItem>
                <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/projects'>Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/contact'>Contact</NavLink>
            </NavItem>
        </Nav>
    </Wrapper>

export default Menu

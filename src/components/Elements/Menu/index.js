import React from 'react'
import { Wrapper, Nav, NavItem, NavLink } from './style'
import Logo from "../Logo"
import { BlockLines, Col, Lines } from "../Layout/style"

const Menu = () =>
    <Wrapper>
        <Nav>
            <NavItem>
                <Logo />
            </NavItem>
            <NavItem>
                <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/work'>Work</NavLink>
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

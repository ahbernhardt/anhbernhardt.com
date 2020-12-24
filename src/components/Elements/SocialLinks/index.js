import { Nav, NavItem, Wrapper, Item } from "./style"
import React from "react"
import EmailLink from "../EmailLink"
import { getCurrentYear } from "../../../utils/functions"

const SocialLinks = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://linkedin.com/in/anhnguyen0208/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"/> LinkedIn</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/anguyen0208" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"/> Github</a>
      </NavItem>
      <NavItem>
        <a href="https://codepen.io/ah_nguyen0208" rel="noopener noreferrer" target="_blank"><i className="fab fa-codepen"/> Codepen</a>
      </NavItem>
      <NavItem>
        <a href="https://www.instagram.com/ah_nguyen0208/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"/> Instagram</a>
      </NavItem>
    </Nav>
  </Wrapper>

export default SocialLinks

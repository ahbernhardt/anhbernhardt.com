import React, { Component } from "react"
// import Navigation from './Elements/Navigation'
// import SocialLinks from './Elements/SocialLinks'
import { GlobalStyle } from '../style/global'
import Menu from "./Elements/Menu"
import Logo from "./Elements/Logo"
import Footer from "./Elements/Footer"
import Switch from "./Elements/Switch"

const Layout = ({children, location}) =>
      <main >
          <GlobalStyle />
          {children}
          {/*<Navigation location={location}/>*/}
          <Logo />
          <Menu />
          <Switch />
          <Footer />
          {/*<SocialLinks />*/}
      </main>

export default Layout

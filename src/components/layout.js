import React from "react"
// import SocialLinks from './Elements/SocialLinks'
import { GlobalStyle, App } from '../style/global'
import Logo from "./Elements/Logo"
import Menu from "./Elements/Menu"
import Footer from "./Elements/Footer"


const Layout = ({children}) =>
      <main >
        <GlobalStyle />
        <div className='app'>
          {/*<Logo />*/}
          <Menu />
            {children}
          {/*<Footer />*/}
          {/*<SocialLinks />*/}
        </div>
      </main>

export default Layout

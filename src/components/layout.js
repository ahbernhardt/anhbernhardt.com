import React from "react"
// import SocialLinks from './Elements/SocialLinks'
import { GlobalStyle} from '../style/global'
import Menu from "./Elements/Menu"
import Footer from "./Elements/Footer"


const Layout = ({children}) =>
      <main >
        <GlobalStyle />
        <div className='app'>
          <Menu />
            {children}
          {/*<Footer />*/}
          {/*<SocialLinks />*/}
        </div>
      </main>

export default Layout

import React from "react"
// import SocialLinks from './Elements/SocialLinks'
import { GlobalStyle} from '../../../style/global'
import Menu from "../Menu"
import {App, MainBody} from './style'
import Footer from "../Footer"
import PageHeader from "../PageHeader"

const Layout = ({children}) =>
  <App>
    <GlobalStyle />
    <Menu />
    <MainBody>
        {children}
        {/*<Footer />*/}
        {/*<SocialLinks />*/}
        {/*</div>*/}
    </MainBody>
  </App>

export default Layout

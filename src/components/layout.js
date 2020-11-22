import React from 'react'
import Navigation from './Elements/Navigation'
import { GlobalStyle } from '../style/global'

export default ({ children, location }) =>
    <main>
        <GlobalStyle />
        {children}
        <Navigation location={location}/>
    </main>

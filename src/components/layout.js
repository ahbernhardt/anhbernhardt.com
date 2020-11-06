import React from 'react'
import Navigation from './Elements/Navigation'
import { GlobalStyle } from '../style/global'
import CircleCursor from "./Elements/Cursor";

export default ({ children, location }) =>
    <main>
        <CircleCursor />
        <GlobalStyle />
        {children}
        <Navigation location={location}/>
    </main>

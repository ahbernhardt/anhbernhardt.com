import React from 'react'
import Link from 'gatsby-link'
import MainLogo from './logo.svg'
import { Wrapper } from './style'

const Logo = () =>
    <Wrapper>
        <Link to='/'><MainLogo width={50} height={50} /></Link>
        <div className="logo svg" />
    </Wrapper>

export default Logo

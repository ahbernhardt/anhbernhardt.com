import React from 'react'
import Link from 'gatsby-link'
import M404 from './M404.svg'
import { Wrapper } from './style'

const Middle404 = props =>
    <Wrapper {...props}>
        <div className="padding">
            <h1>
                <Link to='/'><M404 width={300} height={200} /></Link>
            </h1>
        </div>
    </Wrapper>

export default Middle404

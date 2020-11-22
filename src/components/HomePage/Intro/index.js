import React from 'react'
import { Wrapper, Title } from './style'

const Tagline = props =>
    <Wrapper {...props} >
        <Title>
            I'm <span className="name">Anh Nguyen</span>, design-minded front-end software engineer focused on building pixel-perfect and responsive interfaces and experiences.
        </Title>
    </Wrapper>

export default Tagline

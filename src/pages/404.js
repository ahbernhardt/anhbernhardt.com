import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Index from '../components/Elements/Layout'
import { fonts, colors, media } from '../style/constants'
import Middle404 from "../components/404/index";
import Head from "../components/Elements/Head";
import {META} from "../utils/constants";


const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

const Subtitle = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  font-family: ${fonts.upright};
  color: ${colors.gray400};
  margin: 1rem 0;
  
  span {
    color: ${colors.yellow500};
  }
`

const Wrapper = styled.section`
  position: static;
  top: 0%;
  left: 0;
  right: 0;
  transform: translateY(0%);
  text-align: center;
  ${media.sm`
    top: 45%;
  `}
`

const BackToHome = styled(Link)`
  color: ${colors.yellow500};
  font-family: ${fonts.upright};
  font-size: .9rem;
  border-bottom: 1px dotted ${colors.yellow500};
  padding: 0 0 .1rem;
  display: inline-block;
  
  &:hover {
    color: #fff;
  }
`

export default ({ location }) =>
    <Index location={location}>
        <Wrapper>
            <Head
                {...META.oops}
                image={META.common.image}
            />
            <header>
                <Middle404 />
                <Title>Oops, sorry!</Title>
                <Subtitle>This page cannot be found.</Subtitle>
                <BackToHome to='/'>Go to index</BackToHome>
            </header>
        </Wrapper>
    </Index>

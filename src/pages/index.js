import React from 'react'
import Index from '../components/Elements/Layout'
import Head from '../components/Elements/Head'
import { META } from '../utils/constants'
// import IntroSection from "../components/HomePage/Intro"

import LandingHero from "../components/HomePage/Landing"

const IndexHome =({ location }) =>{

    return (
        <Index location={location}>
            <Head
                {...META.index}
                image={META.common.image}
            />
            <LandingHero/>
        </Index>
    )
}

export default IndexHome;

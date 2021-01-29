import React from 'react'
import Index from '../components/Elements/Layout'
import Head from '../components/Elements/Head'
import { META } from '../utils/constants'
import Hero from "../components/HomePage/Hero/Hero"
import IntroSection from "../components/HomePage/Intro"

export default ({ location }) =>
    <Index location={location}>
      <section>
        <Head
            {...META.index}
            image={META.common.image}
        />
        <Hero />
        <IntroSection fixed={true} />
      </section>
    </Index>

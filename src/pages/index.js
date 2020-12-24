import React from 'react'
import Layout from '../components/layout'
import Head from '../components/Elements/Head'
import { META } from '../utils/constants'
import Hero from "../components/HomePage/Hero/Hero"
import IntroSection from "../components/HomePage/Intro"

export default ({ location }) =>
    <Layout location={location}>
      <section>
        <Head
            {...META.index}
            image={META.common.image}
        />
      <Hero />
      <IntroSection fixed={true}/>
      </section>
    </Layout>

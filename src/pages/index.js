import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/HomePage/Intro'
import Head from '../components/Elements/Head'
import { META } from '../utils/constants'
import Hero from "../components/HomePage/Hero/Hero"

export default ({ location }) =>
    <Layout location={location}>
      <section>
        <Head
            {...META.index}
            image={META.common.image}
        />
      <Hero />
      <Intro fixed={true} />

      </section>
    </Layout>

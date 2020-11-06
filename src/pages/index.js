import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/HomePage/Intro'
import Head from '../components/Elements/Head'
import HelloMiddle from '../components/HomePage/HelloText'
import { META } from '../utils/constants'

export default ({ location }) =>
    <Layout location={location}>
      <section>
        <Head
            {...META.index}
            image={META.common.image}
        />
        <HelloMiddle />
        <Intro fixed={true} />

      </section>
    </Layout>

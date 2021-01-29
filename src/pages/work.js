import React from 'react'
import Index from '../components/Elements/Layout'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import PageHeader from "../components/Elements/PageHeader"

export default ({ location }) =>
  <Index location={location}>
    <Head
      {...META.work}
      image={META.common.image}
    />
    <PageHeader title='Work' />
  </Index>



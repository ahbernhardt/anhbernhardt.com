import React from 'react'
import Index from '../components/Elements/Layout'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import PageHeader from "../components/Elements/PageHeader"
import ContactPage from "../components/ContactPage/index"

export default ({ location }) =>
  <Index location={location}>
    <Head
      {...META.contact}
      image={META.common.image}
    />
    <PageHeader title='Contact' />
    <ContactPage />
  </Index>



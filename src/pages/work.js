import React from 'react'
import Layout from '../components/Elements/Layout'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import WorkContent from "../components/WorksPage/Content"
import { StaticQuery, graphql } from "gatsby"

const ProjectQuery = graphql`
  query ProjectsQuery {
    projects: allProjectsJson  {
        nodes {
          title
          subTitle
          imageLink
          imageTitle
          url
        }
    }
  }
`

export default ({ location }) =>
  <StaticQuery
    query= {ProjectQuery}
    render= {data =>
      <Layout location={location}>
          <Head
            {...META.work}
            image={META.common.image}
          />
          <WorkContent data={data} />
      </Layout>
    }
  />


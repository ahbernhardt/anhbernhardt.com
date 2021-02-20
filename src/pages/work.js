import React from 'react'
import Layout from '../components/Elements/Layout'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import PageHeader from "../components/Elements/PageHeader"
import WorkContent from "../components/WorksPage/Content"
import { StaticQuery, graphql } from "gatsby"

const ProjectQuery = graphql`
  query ProjectsQuery {
    projects: allMongodbWorksProjects(sort: {order: DESC, fields: date}) {
      edges {
        project: node {
          date(formatString: "yyyy-mm")
          title
          company
          imageLink
          imageTitle
          url
        }
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
          {/*<PageHeader title='Work'/>*/}
          <WorkContent data={data} />
      </Layout>
    }
  />


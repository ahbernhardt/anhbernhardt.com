import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import AboutContent from '../components/AboutPage/Content'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import PageHeader from "../components/Elements/PageHeader"

const AboutQuery = graphql`
  query AboutQuery {
    timelines: allTimelinesJson {
      edges {
        timeline: node {
          year
          position
          company
          description
        }
      }
    }
    
    designs: allDesignsJson {
      edges {
        design: node {
          name
        }
      }
    }
    
    languages: allLanguagesJson {
      edges {
        language: node {
          name
        }
      }
    }

    frameworks: allFrameworksJson {
      edges {
        framework: node {
          name
        }
      }
    }

    tools: allToolsJson {
      edges {
        tool: node {
          name
        }
      }
    }
  }
`
export default ({ location }) =>
    <StaticQuery
      query= {AboutQuery}
      render= {data =>
        <Layout location={location}>
            <Head
              {...META.about}
              image={META.common.image}
            />
            <AboutContent data={data} />
        </Layout>
      }
    />

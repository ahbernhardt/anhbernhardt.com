import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/Elements/Layout'
import AboutContent from '../components/AboutPage/Content'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import PageHeader from "../components/Elements/PageHeader"

const AboutQuery = graphql`
  query AboutQuery {
    designs: allMongodbSkillsDesigns {
      edges {
        design: node {
          name
        }
      }
    }
    
    languages: allMongodbSkillsLanguages {
      edges {
        language: node {
          name
        }
      }
    }

    frameworks: allMongodbSkillsFrameworks {
      edges {
        framework: node {
          name
        }
      }
    }

    tools: allMongodbSkillsTools {
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
          {/*<PageHeader title='About'/>*/}
          <AboutContent data={data} />
      </Layout>
    }
  />




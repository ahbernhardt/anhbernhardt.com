import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import ProfileContent from '../components/ProfilePage/Content'

const profileQuery = graphql`
  query ProfileQuery {
    timelines: allTimelinesJson {
      edges {
        timeline: node {
          year
          position
          company
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
        query= {profileQuery}
        render= {data =>
            <Layout location={location}>
                <ProfileContent data={data} />
            </Layout>
        }
    />

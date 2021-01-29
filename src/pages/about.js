import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import AboutContent from '../components/AboutPage/Content'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"

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
          <AboutContent data={data} />
      </Layout>
    }
  />


// timelines: allTimelinesJson {
//   edges {
//     timeline: node {
//       year
//       position
//       company
//       description
//     }
//   }
// }

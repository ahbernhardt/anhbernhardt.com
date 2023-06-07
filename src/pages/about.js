import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/Elements/Layout'
import AboutContent from '../components/AboutPage/Content'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"

const AboutQuery = graphql`
  query AboutQuery {
  designs: allDesignsJson {
    nodes {
      name
    }
  }
  languages: allLanguagesJson {
    nodes {
      name
    }
  }
  frameworks: allFrameworksJson {
    nodes {
      name
    }
  }
  tools: allToolsJson {
    nodes {
      name
    }
  }
}
`
const AboutHome = ({ location }) => {
    return (
        <StaticQuery
            query={AboutQuery}
            render={data =>
                <Layout location={location}>
                    <Head
                        {...META.about}
                        image={META.common.image}
                    />
                    <AboutContent data={data}/>
                </Layout>
            }
        />
    )
}

export default AboutHome;


